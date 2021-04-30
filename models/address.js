'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate(models) {
      this.belongsTo(models.User);
    }
  };
  Address.init({
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    post_code: DataTypes.INTEGER,
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Address',
    timestamps: false,
  });
  return Address;
};