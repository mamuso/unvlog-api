'use strict';

const { gql } = require('apollo-server-express');

const typeDef = gql`
  type Pet {
    name: String
    type: String
  }

  extend type Query {
    pets: [Pet]
  }
`;

module.exports = {
  typeDef
};
