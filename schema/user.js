'use strict';

const { gql } = require('apollo-server-express');

module.exports.default = gql`
  type User {
    id: Int!
    username: String!
    email: String!
    createdAt: DateTime! # will be generated
    updatedAt: DateTime! # will be generated
  }
  extend type Query {
    allUsers: [User]
    user(id: Int!): User
    me: User
  }
`;
