'use strict';

const db = require('../../database/model');
const utils = require('../../utils/utils');

const resolvers = {
  Query: {
    users: (parent, args, context, info) => {
      return db.User.findAll({
        attributes: utils.mapAttributes(db.User, info)
      });
    }
  }
};

module.exports = {
  resolvers
};
