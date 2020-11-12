'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('User_Albums_Like', {
      UserId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      AlbumId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('User_Albums_Like');
  }
};
