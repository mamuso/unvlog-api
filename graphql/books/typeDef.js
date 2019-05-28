'use strict';

const { gql } = require('apollo-server-express');

const typeDef = gql`
  type Book {
    title: String
    author: String
  }

  extend type Query {
    books: [Book]
  }
`;

module.exports = {
  typeDef
};
