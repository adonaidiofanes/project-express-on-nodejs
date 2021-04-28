'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tasks', [
      {
        description: "Add button on index page",
        createdAt: new Date(),
        updatedAt: new Date(),
        projectId: 1,
      },
      {
        description: "Add method for get all users",
        createdAt: new Date(),
        updatedAt: new Date(),
        projectId: 2,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
