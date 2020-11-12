'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Musics', [{
      name: 'Musica 1',
      album_id: 1,
      artist_id: 1,
      track_number: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Musica 2',
      album_id: 1,
      artist_id: 1,
      track_number: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Musica 3',
      album_id: 1,
      artist_id: 1,
      track_number: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Musics', null, {});
  }
};
