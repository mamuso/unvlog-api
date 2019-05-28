'use strict';

const { Pet } = require('./Pet');

const resolvers = {
  Query: {
    pets: () => Pet.all()
  }
};

module.exports = {
  resolvers
};
