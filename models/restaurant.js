'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Restaurant.associate = function(models) {
    Restaurant.hasMany(models.Picture, {
      foreignKey: 'restaurantId',
      as: 'pictures'
    });
  };
  return Restaurant;
};