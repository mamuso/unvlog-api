'use strict';

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const jwt = require('express-jwt');

const schema = require('./schema');
const resolvers = require('./resolvers');

require('dotenv').config();

// Create our express app
const app = express();
app.use(cors());

// Apollo server
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: async () => ({
    models,
    authUser: req.user
  })
});

server.applyMiddleware({ app, path: '/v0' });

// const app = express();
// server.applyMiddleware({ app });

// // Graphql endpoint
// app.use(
//   '/v1',
//   bodyParser.json(),
//   jwt({
//     secret: process.env.JWT_SECRET,
//     credentialsRequired: false
//   }),
//   ApolloServer(req => ({
//     schema,
//     context: {
//       authUser: req.user
//     }
//   }))
// );

// // Graphiql for testing the API out
// app.use('/graphiql', gql({ endpointURL: 'v1' }));

// app.listen(process.env.PORT, () => {
//   console.log(`🚀 GraphiQL is running on http://localhost:${process.env.PORT}/graphiql`);
// });
