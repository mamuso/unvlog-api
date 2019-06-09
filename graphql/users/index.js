'use strict';

const db = require('../../database/model');

const { User } = require('./User');
const { resolvers } = require('./resolvers');
const { typeDef } = require('./typeDef');

const model = db.sequelize['import']('./User');
db[model.name] = model;

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = {
  User,
  resolvers,
  typeDef
};
