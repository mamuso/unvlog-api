'use strict';

const { Book } = require('./Book');
const { resolvers } = require('./resolvers');
const { typeDef } = require('./typeDef');

module.exports = {
  Book,
  resolvers,
  typeDef
};
