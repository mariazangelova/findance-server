"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "events",
      [
        {
          title: "Double Skin | Double Mind",
          description: "",
          teacher: "",
          dj: "",
          location: "ICK",
          datetime: new Date(),
          maxDancers: 10,
          duration: 2,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Floor Improvisation",
          description: "",
          teacher: "Manuela",
          dj: "",
          location: "OT301",
          datetime: new Date(),
          maxDancers: 10,
          duration: 2,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("events", null, {});
  },
};
