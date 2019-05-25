'use strict';

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

const schema = require('./data/schema');

const app = express();

// Graphql endpoint
app.use('/v1', bodyParser.json(), graphqlExpress({ schema }));

// Graphiql for testing the API out
app.use('/graphiql', graphiqlExpress({ endpointURL: 'v1' }));

app.listen(process.env.PORT, () => {
  console.log(`GraphiQL is running on http://localhost:${process.env.PORT}/graphiql`);
});
