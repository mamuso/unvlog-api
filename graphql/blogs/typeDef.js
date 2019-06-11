'use strict';

const { gql } = require('apollo-server-express');

const typeDef = gql`
  type Blog {
    slug: String
    title: String
    aboutMe: String
    # lastPostDate: Date TODO: implement scalar date
    userId: Int
    colorBack: String
    colorLink: String
  }
`;

module.exports = {
  typeDef
};
