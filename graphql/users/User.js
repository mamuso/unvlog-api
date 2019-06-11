'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      login: DataTypes.STRING,
      email: DataTypes.STRING,
      lastLogin: DataTypes.DATE,
      city: DataTypes.STRING,
      country: DataTypes.STRING,
      pro: DataTypes.BOOLEAN,
      screenName: DataTypes.STRING,
      language: DataTypes.STRING,
      notifyNewComments: DataTypes.BOOLEAN,
      new: DataTypes.BOOLEAN,
      hasSixContacts: DataTypes.BOOLEAN,
      commentOnThreeBlogs: DataTypes.BOOLEAN
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
