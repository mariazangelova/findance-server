"use strict";
module.exports = (sequelize, DataTypes) => {
  const style = sequelize.define(
    "style",
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {}
  );
  style.associate = function (models) {
    style.belongsToMany(model.event, {
      through: "eventstyle",
      foreignKey: "styleId",
    });
  };
  return style;
};
