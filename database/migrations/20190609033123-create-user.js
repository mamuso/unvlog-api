'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('Users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        login: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING
        },
        lastLogin: {
          type: Sequelize.DATE,
          allowNull: true,
          defaultValue: Sequelize.literal('NOW()')
        },
        city: {
          type: Sequelize.STRING
        },
        country: {
          type: Sequelize.STRING
        },
        pro: {
          type: Sequelize.BOOLEAN
        },
        screenName: {
          type: Sequelize.STRING
        },
        language: {
          type: Sequelize.STRING
        },
        notifyNewComments: {
          type: Sequelize.BOOLEAN
        },
        new: {
          type: Sequelize.BOOLEAN
        },
        hasSixContacts: {
          type: Sequelize.BOOLEAN
        },
        commentOnThreeBlogs: {
          type: Sequelize.BOOLEAN
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
        queryInterface.addIndex('Users', ['email'], {
          unique: true,
          name: 'email'
        })
      )
      .then(() =>
        queryInterface.addIndex('Users', ['login'], {
          unique: true,
          name: 'login'
        })
      );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
