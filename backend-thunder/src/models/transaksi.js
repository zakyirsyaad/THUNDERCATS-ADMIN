const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Transaksi = sequelize.define('Transaksi', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nama_product: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  jenis_product: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  jumlah_produk: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  harga: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total_harga: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Transaksi;