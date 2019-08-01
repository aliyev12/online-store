const { GraphQLServer } = require('graphql-yoga');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const db = require('./db');

const resolver = {
    Mutation: Mutation,
    Query: Query
}

// Create the GraphQL yoga server

function createServer() {
    return new GraphQLServer({
        typeDefs: 'src/schema.graphql',
        resolver,
        // resolvers: () => true,
        resolverValidationOptions: {
            requireResolversForResolveType: false
        },
        context: req => ({ ...req, db })
    });
}

module.exports = createServer;