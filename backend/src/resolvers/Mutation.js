const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { randomBytes } = require("crypto");
const { promisify } = require("util");
const { transport, makeANiceEmail } = require("../mail");
const { hasPermission } = require("../utils");
const stripe = require("../stripe");

const Mutations = {
  /*===================*/
  /*=== CREATE ITEM ===*/
  /*===================*/
  async createItem(parent, args, ctx, info) {
    // Check if they are logged in
    if (!ctx.request.userId)
      throw new Error("You must be logged in to do that!");

    const hasPermissions = ctx.request.user.permissions.some(permission =>
      ["ADMIN"].includes(permission)
    );
    if (!hasPermissions) {
      throw new Error(
        "You don't have a permission to add a new item. Please, reach out to site admin to gain special permission - aaliyev.com."
      );
    }

    const item = await ctx.db.mutation.createItem(
      {
        data: {
          // This is how we create a relationship between the item and the user
          user: {
            connect: {
              id: ctx.request.userId
            }
          },
          ...args
        }
      },
      info
    );
    return item;
  },

  /*===================*/
  /*=== UPDATE ITEM ===*/
  /*===================*/
  updateItem(parent, args, ctx, info) {
    // First take a copy of the updates
    const updates = { ...args };
    // Remove the ID from the updates
    delete updates.id;

    const hasPermissions = ctx.request.user.permissions.some(permission =>
      ["ADMIN"].includes(permission)
    );
    if (!hasPermissions) {
      throw new Error(
        "You don't have a permission to update an item. Please, reach out to site admin to gain special permission - aaliyev.com."
      );
    }

    return ctx.db.mutation.updateItem(
      {
        data: updates,
        where: {
          id: args.id
        }
      },
      info
    );
  },

  /*===================*/
  /*=== DELETE ITEM ===*/
  /*===================*/
  async deleteItem(parent, args, ctx, info) {
    const where = { id: args.id };
    const item = await ctx.db.query.item({ where }, `{ id title user { id }}`);
    // 1. Find the item
    // 2. Check if they own that item or have permissions
    const ownsItem = item.user.id === ctx.request.userId;
    const hasPermissions = ctx.request.user.permissions.some(permission =>
      ["ADMIN", "ITEMDELETE"].includes(permission)
    );

    if (!ownsItem || !hasPermissions) {
      throw new Error(
        "You are not allowed to delete this item. Please, reach out to site admin to gain special permission - aaliyev.com."
      );
    }

    // 2. Delete it
    return ctx.db.mutation.deleteItem({ where }, info);
  },

  /*===============*/
  /*=== SIGN UP ===*/
  /*===============*/
  async signup(parent, args, ctx, info) {
    args.email = args.email.toLowerCase();
    // Hash the password
    const password = await bcrypt.hash(args.password, 10);
    // Create the user in the database
    const user = await ctx.db.mutation.createUser(
      {
        data: { ...args, password, permissions: { set: ["USER"] } }
      },
      info
    );
    // Create the JWT token for them
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // Set the JWT as a cookie on the response
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year
    });
    return user;
  },

  /*===============*/
  /*=== SIGN IN ===*/
  /*===============*/
  async signin(parent, { email, password }, ctx, info) {
    // 1. Check if there is a user with that email
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) throw new Error(`No such user found for email ${email}`);

    // 2. Check if there password is correct
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error("Invalid Password!");

    // 3. Generate the JWT cookie
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

    // 4. Set the cookie with token
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year
    });

    // 5. Return the user
    return user;
  },

  /*===============*/
  /*=== SIGN OUT ===*/
  /*===============*/
  signout(parent, args, ctx, info) {
    ctx.response.clearCookie("token");
    return { message: "Goodbye!" };
  },

  /*=====================*/
  /*=== REQUEST RESET ===*/
  /*=====================*/
  async requestReset(parent, args, ctx, info) {
    // 1. Check if this is a real user
    const user = await ctx.db.query.user({ where: { email: args.email } });
    if (!user) throw new Error(`No such user found for email ${args.email}`);

    // 2. Set a reset token and expiry on that user
    const randomBytesPromise = promisify(randomBytes);
    let resetToken = await randomBytesPromise(20);
    resetToken = resetToken.toString("hex");
    const resetTokenExpiry = Date.now() + 3600000; // 1 hour from now
    const res = await ctx.db.mutation.updateUser({
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry }
    });
    console.log(res);
    // 3. Email them that reset token
    const mailRes = await transport.sendMail({
      from: "aaa7c4@gmail.com",
      to: user.email,
      subject: "Your password reset token",
      html: makeANiceEmail(`
      Your password reset token is here! \n\n 
      <a href="${process.env.FRONTEND_URL}/reset?resetToken=${resetToken}">
        Click here to reset
      </a>
      `)
    });

    // 4. Return the message
    return { message: "Thanks" };
  },

  /*======================*/
  /*=== RESET PASSWORD ===*/
  /*======================*/
  async resetPassword(parent, args, ctx, info) {
    // 1. Check if passwords match
    if (args.password !== args.confirmPassword) {
      throw new Error("Your passwords don't match!");
    }

    // 2. Check if it is a login reset token

    // 3. Check if it is expired
    const [user] = await ctx.db.query.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: Date.now() - 3600000
      }
    });
    if (!user) {
      throw new Error("This token is either invalid or expired");
    }
    // 4. Hash their new password
    const password = await bcrypt.hash(args.password, 10);
    // 5. Save the new password to the user and remove old resetToken fields
    const updatedUser = await ctx.db.mutation.updateUser({
      where: { email: user.email },
      data: {
        password,
        resetToken: null,
        resetTokenExpiry: null
      }
    });
    // 6. Generate JWT
    const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);
    // 7. Set the JWT cookie
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });
    // 8. Return the new user
    return updatedUser;
  },

  /*==========================*/
  /*=== UPDATE PERMISSIONS ===*/
  /*==========================*/
  async updatePermissions(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) throw new Error("You must be logged in!");

    // 2. Query the current user
    const currentUser = await ctx.db.query.user(
      {
        where: {
          id: ctx.request.userId
        }
      },
      info
    );

    // 3. Check if they have permissions to do that
    hasPermission(currentUser, ["ADMIN"]);

    // 4. Update the permissions
    return ctx.db.mutation.updateUser(
      {
        data: {
          permissions: {
            set: args.permissions
          }
        },
        where: {
          id: args.userId
        }
      },
      info
    );
  },

  /*===================*/
  /*=== ADD TO CART ===*/
  /*===================*/
  async addToCart(parent, args, ctx, info) {
    // 1. Make sure user is signed in
    const { userId } = ctx.request;
    if (!userId) throw new Error("You must be signed in.");

    // 2. Query the users current cart
    const [existingCartItem] = await ctx.db.query.cartItems({
      where: {
        user: { id: userId },
        item: { id: args.id }
      }
    });

    // 3. Check if that item is already in users cart
    // Increment by 1 if it is
    if (existingCartItem) {
      console.log("This item is already in their cart");
      return ctx.db.mutation.updateCartItem(
        {
          where: { id: existingCartItem.id },
          data: { quantity: existingCartItem.quantity + 1 }
        },
        info
      );
    }

    // If it is not, then create a fresh item for that user
    return ctx.db.mutation.createCartItem(
      {
        data: {
          user: { connect: { id: userId } },
          item: { connect: { id: args.id } }
        }
      },
      info
    );
  },

  /*===================*/
  /*=== ADD TO CART ===*/
  /*===================*/
  async removeFromCart(parent, args, ctx, info) {
    // 1. Find the cart item
    const cartItem = await ctx.db.query.cartItem(
      {
        where: {
          id: args.id
        }
      },
      `{ id, user { id }}`
    );
    // 2. Make sure we found the item
    if (!cartItem) throw new Error("No cart item found");

    // 3. Make sure that they own that cart item
    if (cartItem.user.id !== ctx.request.userId)
      throw new Error("Not Authorized");

    // 4. Delete that cart item
    return ctx.db.mutation.deleteCartItem(
      {
        where: { id: args.id }
      },
      info
    );
  },

  /*===================*/
  /*=== ADD TO CART ===*/
  /*===================*/
  async createOrder(parent, args, ctx, info) {
    // 1. Query the current user and make sure they are signed in
    const { userId } = ctx.request;
    if (!userId)
      throw new Error("You must be signed in to complete this order.");
    const user = await ctx.db.query.user(
      { where: { id: userId } },
      `{ 
          id 
          name 
          email 
          cart { 
            id 
            quantity 
            item { 
              title 
              price 
              id 
              description 
              image 
              largeImage
            }
          } 
        }`
    );

    // 2. Recalculate the total for the price
    const amount = user.cart.reduce(
      (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
      0
    );
    console.log(`Going to charge for a total of ${amount}`);

    // 3. Create the stripe charge (turn token into money)
    const charge = await stripe.charges.create({
      amount,
      currency: "USD",
      source: args.token
    });

    // 4. Convert the CartItems to OrderItems
    const orderItems = user.cart.map(cartItem => {
      const orderItem = {
        ...cartItem.item,
        quantity: cartItem.quantity,
        user: { connect: { id: userId } }
      };
      delete orderItem.id;
      return orderItem;
    });

    // 5. Create the order
    const order = await ctx.db.mutation
      .createOrder({
        data: {
          total: charge.amount,
          charge: charge.id,
          items: { create: orderItems },
          user: { connect: { id: userId } }
        }
      })
      .catch(() => {
        throw new Error(
          `Sorry, something went wrong while creating your order.`
        );
      });

    // 6. Clean up = clear the users cart, delete cart item
    const cartItemIds = user.cart.map(cartItem => cartItem.id);
    await ctx.db.mutation.deleteManyCartItems({
      where: {
        id_in: cartItemIds
      }
    });

    // 7. Return the order to the client
    return order;
  }
};

module.exports = Mutations;
