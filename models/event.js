'use strict';
module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define('event', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    teacher: DataTypes.STRING,
    dj: DataTypes.STRING,
    location: DataTypes.STRING,
    datetime: DataTypes.DATE,
    maxDancers: DataTypes.INTEGER,
    duration: DataTypes.DECIMAL,
    userId: DataTypes.INTEGER
  }, {});
  event.associate = function(models) {
    // associations can be defined here
  };
  return event;
};