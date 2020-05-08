'use strict';
module.exports = (sequelize, DataTypes) => {
  const dancer = sequelize.define('dancer', {
    userId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER
  }, {});
  dancer.associate = function(models) {
    // associations can be defined here
  };
  return dancer;
};