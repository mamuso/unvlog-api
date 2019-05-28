'use strict';

const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const books = require('./graphql/books');
const pets = require('./graphql/pets');

const typeDef = gql`
  type Query
`;

const server = new ApolloServer({
  typeDefs: [typeDef, books.typeDef, pets.typeDef],
  resolvers: [books.resolvers, pets.resolvers]
});

// Create our express app
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
