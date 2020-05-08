'use strict';
module.exports = (sequelize, DataTypes) => {
  const style = sequelize.define('style', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  style.associate = function(models) {
    // associations can be defined here
  };
  return style;
};