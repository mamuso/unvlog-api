'use strict';

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer, gql } = require('apollo-server-express');

const schema = require('./data/schema');

const app = express();

// Graphql endpoint
app.use('/v1', bodyParser.json(), new ApolloServer({ schema }));

// Graphiql for testing the API out
app.use('/graphiql', gql({ endpointURL: 'v1' }));

app.listen(process.env.PORT, () => {
  console.log(`🚀 GraphiQL is running on http://localhost:${PORT}/graphiql`);
});
