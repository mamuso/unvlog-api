'use strict';

const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const users = require('./graphql/users');
const blogs = require('./graphql/blogs');

const typeDef = gql`
  type Query
`;

const server = new ApolloServer({
  typeDefs: [typeDef, users.typeDef, blogs.typeDef],
  resolvers: [users.resolvers, blogs.resolvers]
});

// Create our express app
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});
