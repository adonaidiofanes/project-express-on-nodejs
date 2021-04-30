'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Addresses', [
      {
        street: 'Amphitheatre Parkway Mountain View', 
        city: 'Montain View', post_code: 94043, 
        country: 'USA', UserId: 1,
      },
      {
        street: '1 Hacker Way', city: 'Menlo Park',
        post_code: 94025, country: 'USA', UserId: 2,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Addresses', null, {});
  }
};
