'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('User_Projects', [
      {
        projectId: 1,
        userId: 1
      },
      {
        projectId: 1,
        userId: 2
      },
      {
        projectId: 2,
        userId: 2
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('User_Projects', null, {});
  }
};
