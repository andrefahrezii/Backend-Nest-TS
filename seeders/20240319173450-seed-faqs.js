'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('FAQs', [
      {
        name_channel: 'Channel 1',
        question: JSON.stringify(["What is NestJS?", "How to create a module in NestJS?"]),
        answer: JSON.stringify(["NestJS is a framework for building efficient, reliable, and scalable server-side applications in Node.js.", "You can create a module in NestJS by using the CLI command `nest generate module module_name`."]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_channel: 'Channel 2',
        question: JSON.stringify(["What is Sequelize?", "How to define models in Sequelize?"]),
        answer: JSON.stringify(["Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.", "You can define models in Sequelize by extending the `Model` class provided by Sequelize."]),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

  }
};
