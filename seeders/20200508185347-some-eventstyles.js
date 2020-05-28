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
        {
          eventId: 3,
          styleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 3,
          styleId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 4,
          styleId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 5,
          styleId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 2,
          styleId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 2,
          styleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 2,
          styleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 6,
          styleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 6,
          styleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 6,
          styleId: 6,
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
