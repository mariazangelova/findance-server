"use strict";
module.exports = (sequelize, DataTypes) => {
  const dancer = sequelize.define(
    "dancer",
    {
      userId: DataTypes.INTEGER,
      eventId: DataTypes.INTEGER,
    },
    {}
  );
  dancer.associate = function (models) {
    dancer.belongsTo(models.user);
    dancer.belongsTo(models.event);
  };
  return dancer;
};
