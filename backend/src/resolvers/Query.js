const { forwardTo } = require('prisma-binding');
const { hasPermission } = require('../utils');

const Query = {
  items: forwardTo('db'),
  item: forwardTo('db'),
  itemsConnection: forwardTo('db'),

  /*==========*/
  /*=== ME ===*/
  /*==========*/
  me(parent, args, ctx, info) {
    // Check if there is a current user id
    if (!ctx.request.userId) return null;
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId }
      },
      info
    );
  },

  /*=============*/
  /*=== USERS ===*/
  /*=============*/
  async users(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // 2. Check if the user has the permissions to query all the users
    hasPermission(ctx.request.user, ['ADMIN', 'PERMISSIONUPDATE']);

    // 3. If they do, query all the users
    return ctx.db.query.users({}, info);
  },

  /*=============*/
  /*=== ORDER ===*/
  /*=============*/
  async order(parent, args, ctx, info) {
    // 1. Make sure they are logged in
    if (!ctx.request.userId) throw new Error(`You must be logged in.`);

    // 2. Query the current order
    const order = await ctx.db.query.order(
      {
        where: { id: args.id }
      },
      info
    );

    // 3. Check if they have permissions to see this order
    if (!order) throw new Error(`The order doesn't exist.`);
    const ownsOrder = order.user.id === ctx.request.userId;
    const hasPermissionToSeeOrder = ctx.request.user.permissions.includes(
      'ADMIN'
    );
    if (!ownsOrder || !hasPermissionToSeeOrder)
      throw new Error(`You are not authorized to see this order.`);

    // 4. Return the order
    return order;
  }
};

module.exports = Query;
