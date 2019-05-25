'use strict';

const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

// Construct a schema, using GraphQL schema language
const typeDefs = `
    scalar DateTime
    type User {
        id: Int!
        firstName: String!
        lastName: String
        email: String!
        createdAt: DateTime! # will be generated
        updatedAt: DateTime! # will be generated
    }
  `;

module.exports = makeExecutableSchema({ typeDefs, resolvers });
