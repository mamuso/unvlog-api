'use strict';

const { gql } = require('apollo-server-express');

const typeDef = gql`
  type User {
    login: String
    email: String
  }

  extend type Query {
    users: [User]
  }
`;

module.exports = {
  typeDef
};
