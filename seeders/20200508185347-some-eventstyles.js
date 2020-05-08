"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "eventstyles",
      [
        {
          eventId: 1,
          styleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 1,
          styleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("eventstyles", null, {});
  },
};
