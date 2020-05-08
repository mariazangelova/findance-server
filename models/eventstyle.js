"use strict";
module.exports = (sequelize, DataTypes) => {
  const eventstyle = sequelize.define(
    "eventstyle",
    {
      eventId: DataTypes.INTEGER,
      styleId: DataTypes.INTEGER,
    },
    {}
  );
  eventstyle.associate = function (models) {
    eventstyle.belongsTo(models.event);
    eventstyle.belongsTo(models.style);
  };
  return eventstyle;
};
