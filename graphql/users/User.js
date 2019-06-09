'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      login: DataTypes.STRING,
      email: DataTypes.STRING,
      last_login: DataTypes.DATE,
      city: DataTypes.STRING,
      country: DataTypes.STRING,
      pro: DataTypes.BOOLEAN,
      screen_name: DataTypes.STRING,
      language: DataTypes.STRING,
      notify_new_comments: DataTypes.BOOLEAN,
      new: DataTypes.BOOLEAN,
      has_six_contacts: DataTypes.BOOLEAN,
      comment_on_three_blogs: DataTypes.BOOLEAN
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
