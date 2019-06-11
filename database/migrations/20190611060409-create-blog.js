'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('Blogs', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        slug: {
          type: Sequelize.STRING
        },
        title: {
          type: Sequelize.STRING
        },
        aboutMe: {
          type: Sequelize.STRING
        },
        lastPostDate: {
          type: Sequelize.DATE
        },
        userId: {
          type: Sequelize.INTEGER
        },
        colorBack: {
          type: Sequelize.STRING
        },
        colorLink: {
          type: Sequelize.STRING
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()')
        },
        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()')
        }
      })
      .then(() =>
        queryInterface.addIndex('Blogs', ['slug'], {
          unique: true,
          name: 'slug'
        })
      )
      .then(() =>
        queryInterface.addIndex('Blogs', ['userId'], {
          unique: true,
          name: 'userId'
        })
      );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Blogs');
  }
};
