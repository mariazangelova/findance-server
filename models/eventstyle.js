'use strict';
module.exports = (sequelize, DataTypes) => {
  const eventstyle = sequelize.define('eventstyle', {
    eventId: DataTypes.INTEGER,
    styleId: DataTypes.INTEGER
  }, {});
  eventstyle.associate = function(models) {
    // associations can be defined here
  };
  return eventstyle;
};