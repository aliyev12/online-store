const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto');
const { promisify } = require('util');

const Mutations = {
  /*===================*/
  /*=== CREATE ITEM ===*/
  /*===================*/
  async createItem(parent, args, ctx, info) {
    // TODO: Check if they are logged in

    const item = await ctx.db.mutation.createItem(
      {
        data: { ...args }
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
    const item = await ctx.db.query.item({ where }, `{ id title }`);
    // 1. Find the item
    // 2. Check if they own that item or have permissions
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
        data: { ...args, password, permissions: { set: ['USER'] } }
      },
      info
    );
    // Create the JWT token for them
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // Set the JWT as a cookie on the response
    ctx.response.cookie('token', token, {
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
    if (!valid) throw new Error('Invalid Password!');

    // 3. Generate the JWT cookie
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

    // 4. Set the cookie with token
    ctx.response.cookie('token', token, {
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
    ctx.response.clearCookie('token');
    return { message: 'Goodbye!' };
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
    resetToken = resetToken.toString('hex');
    const resetTokenExpiry = Date.now() + 3600000; // 1 hour from now
    const res = await ctx.db.mutation.updateUser({
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry }
    });
    console.log(res);
    // 3. Email them that reset token
    return { message: 'Thanks' };
  },

  /*======================*/
  /*=== RESET PASSWORD ===*/
  /*======================*/
  async resetPassword(parent, args, ctx, info) {
    // 1. Check if passwords match
    if (args.password !== args.confirmPassword) {
      throw new Error('Your passwords don\'t match!');
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
      throw new Error('This token is either invalid or expired');
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
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    })
    // 8. Return the new user
    return updatedUser;
  }
};

module.exports = Mutations;
