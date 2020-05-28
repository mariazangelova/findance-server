"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "styles",
      [
        {
          name: "Contemporary",
          description: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Improvisation",
          description: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ballet",
          description: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jazz",
          description: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Latin",
          description: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Contact",
          description: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("styles", null, {});
  },
};
