'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('User_Musics_View', [{
      UserId: 1,
      MusicId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      UserId: 1,
      MusicId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User_Musics_View', null, {});
  }
};
