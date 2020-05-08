"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
    },
    {}
  );
  user.associate = function (models) {
    user.hasMany(models.event);
    user.belongsToMany(models.event, {
      through: "dancer",
      foreignKey: "userId",
    });
  };
  return user;
};
