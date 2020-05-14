"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("events", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      teacher: {
        type: Sequelize.STRING,
      },
      dj: {
        type: Sequelize.STRING,
      },
      location: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      longitude: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      latitude: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      datetime: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      maxDancers: {
        type: Sequelize.INTEGER,
      },
      duration: {
        type: Sequelize.DECIMAL,
      },
      price: {
        type: Sequelize.DECIMAL,
      },
      imageUrl: {
        type: Sequelize.STRING,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("events");
  },
};
