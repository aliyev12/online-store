const Query = {
    dogs(parent, arg, ctx, info) {
        return [{ name: 'Snickers' }, {name: 'Sunny'}];
    }
};

module.exports = Query;
