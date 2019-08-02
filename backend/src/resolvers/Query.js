const Query = {
  dogs(parent, arg, ctx, info) {
    global.dogs = global.dogs || [];
    return global.dogs;
  },
  dog(parent, arg, ctx, info) {
    global.dogs = global.dogs || [];
    return global.dogs[arg.index];
  }
};

module.exports = Query;
