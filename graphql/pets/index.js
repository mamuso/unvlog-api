'use strict';

const { Pet } = require('./Pet');
const { resolvers } = require('./resolvers');
const { typeDef } = require('./typeDef');

module.exports = {
  Pet,
  resolvers,
  typeDef
};
