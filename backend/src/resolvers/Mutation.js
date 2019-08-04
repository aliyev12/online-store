const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Mutations = {
  /*=== CREATE ITEM ===*/
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
  /*=== UPDATE ITEM ===*/
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
  /*=== DELETE ITEM ===*/
  async deleteItem(parent, args, ctx, info) {
    const where = { id: args.id };
    const item = await ctx.db.query.item({ where }, `{ id title }`);
    // 1. Find the item
    // 2. Check if they own that item or have permissions
    // 2. Delete it
    return ctx.db.mutation.deleteItem({ where }, info);
  },
  /*=== SIGN UP ===*/
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
  }
};

module.exports = Mutations;
