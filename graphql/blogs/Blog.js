'use strict';
module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define(
    'Blog',
    {
      slug: DataTypes.STRING,
      title: DataTypes.STRING,
      aboutMe: DataTypes.STRING,
      lastPostDate: DataTypes.DATE,
      userId: DataTypes.INTEGER,
      colorBack: DataTypes.STRING,
      colorLink: DataTypes.STRING
    },
    {}
  );
  Blog.associate = function(models) {
    // associations can be defined here
  };
  return Blog;
};
