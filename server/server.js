'use strict';

require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
// const session = require('express-session');
// const apiRouter = require('./routes');

const app = express();

// app.use(express.json());

// app.use('/v1', apiRouter);

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: true,
//     saveUninitialized: true
//   })
// );

// Construct a schema, using GraphQL schema language
var MyGraphQLSchema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

app.use(
  '/graphql',
  graphqlHTTP({
    schema: MyGraphQLSchema,
    rootValue: root,
    graphiql: true
}));

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
