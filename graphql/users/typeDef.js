'use strict';

const { gql } = require('apollo-server-express');

const typeDef = gql`
  type User {
    id: Int!
    login: String!
    email: String!
    blog: Blog!
  }

  extend type Query {
    users: [User]
    blog(id: Int): Blog
  }
`;

module.exports = {
  typeDef
};
