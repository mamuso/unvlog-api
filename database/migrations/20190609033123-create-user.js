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
        last_login: {
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
        screen_name: {
          type: Sequelize.STRING
        },
        language: {
          type: Sequelize.STRING
        },
        notify_new_comments: {
          type: Sequelize.BOOLEAN
        },
        new: {
          type: Sequelize.BOOLEAN
        },
        has_six_contacts: {
          type: Sequelize.BOOLEAN
        },
        comment_on_three_blogs: {
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
