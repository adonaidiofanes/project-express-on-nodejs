'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Projects', [
      {
        name: "WhatsApp Attendance",
        description: "Project for attendance on whatsapp via web",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Dog Care",
        description: "Petshop to buy toys from our pets.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Projects', null, {});
  }
};
