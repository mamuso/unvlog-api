'use strict';

const db = require('../../database/model');

const { Blog } = require('./Blog');
const { resolvers } = require('./resolvers');
const { typeDef } = require('./typeDef');

const model = db.sequelize['import']('./Blog');
db[model.name] = model;

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = {
  Blog,
  resolvers,
  typeDef
};
