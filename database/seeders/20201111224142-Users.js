'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      name: 'Luan Vasco',
      email: 'luan.vfarias@gmail.com',
      password: 'eyJhbGciOiJIUzI1NiJ9.MTIzNDU2.UlFvLNOJsLTJE01tU8d8K9PkhwPdOA8RTbK1yl6PLKA',
      avatar: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
