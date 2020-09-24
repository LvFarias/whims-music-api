'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      name: 'Luan Vasco',
      email: 'luan.vfarias@gmail.com',
      password: '123456789',
      password: '123456789',
      password: '123456789',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },
  down: async (queryInterface, Sequelize) => { }
};
