'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Projects', [
      {
        name: "WhatsApp Attendance",
        description: "Project for attendance on whatsapp via web",
        createdAt: new Date(),
        updatedAt: new Date(),
        companyId: 1,
      },
      {
        name: "Dog Care",
        description: "Petshop to buy toys from our pets.",
        createdAt: new Date(),
        updatedAt: new Date(),
        companyId: 2,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Projects', null, {});
  }
};
