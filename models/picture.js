'use strict';
module.exports = (sequelize, DataTypes) => {
  const Picture = sequelize.define('Picture', {
    title: DataTypes.STRING,
    url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Picture.associate = function(models) {
    Picture.belongsTo(models.Restaurant, {
      foreignKey: 'restaurantId',
      onDelete: 'CASCADE'
    });
  };
  return Picture;
};