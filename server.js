'use strict';

const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const users = require('./graphql/users');

const typeDef = gql`
  type Query
`;

const server = new ApolloServer({
  typeDefs: [typeDef, users.typeDef],
  resolvers: [users.resolvers]
});

// Create our express app
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});
