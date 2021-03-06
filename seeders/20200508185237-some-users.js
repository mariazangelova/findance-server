"use strict";
// const bcrypt = require("bcrypt");
// const { SALT_ROUNDS } = require("../config/constants");

// const User = require("../models").user;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Simon",
          lastName: "Smith",
          email: "test@test.com",
          password: "test",
          phone: "",
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Valerie",
          lastName: "Petrov",
          email: "dummy@dummy.com",
          password: "dummy",
          phone: "",
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
