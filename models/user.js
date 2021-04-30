'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasOne(models.Address);
      this.belongsToMany(models.Project, { through: 'User_Project' });
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    cellphone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};