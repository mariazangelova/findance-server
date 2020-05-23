"use strict";
module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define(
    "event",
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      teacher: DataTypes.STRING,
      dj: DataTypes.STRING,
      location: DataTypes.STRING,
      address: DataTypes.STRING,
      longitude: DataTypes.STRING,
      latitude: DataTypes.STRING,
      datetime: DataTypes.STRING,
      maxDancers: DataTypes.INTEGER,
      duration: DataTypes.DECIMAL,
      price: DataTypes.DECIMAL,
      imageUrl: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  event.associate = function (models) {
    event.belongsToMany(models.user, {
      through: "dancer",
      foreignKey: "eventId",
    });
    event.belongsToMany(models.style, {
      through: "eventstyle",
      foreignKey: "eventId",
    });
  };
  return event;
};
