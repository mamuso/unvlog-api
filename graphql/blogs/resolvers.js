'use strict';

const db = require('../../database/model');
const utils = require('../../utils/utils');

const resolvers = {
  Query: {
    blog: (parent, args, context, info) => {
      return db.Blog.findAll({
        id: args.id,
        attributes: utils.mapAttributes(db.Blog, info)
      });
    }
  }
};

module.exports = {
  resolvers
};
