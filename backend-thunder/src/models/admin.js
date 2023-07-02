const dbPool= require('../config/database');
const {Sequelize} = require('sequelize');
const { DataTypes } = require('sequelize');

const Admin = dbPool.define('Admin', {
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Admin;