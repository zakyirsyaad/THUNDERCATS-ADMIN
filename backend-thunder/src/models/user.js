const dbPool = require('../config/database');
const { Sequelize } = require('sequelize');

// const getAllProduct = () => {
//     const SQLQuery = 'SELECT * FROM product'

//     return dbPool.execute(SQLQuery);
// }

// const createNewProduct = (body) => {
//     const SQLQuery = `INSERT INTO product ( nama_product, jenis_product, stok) VALUES ('${body.nama_product}','${body.jenis_product}','${body.stok}')`;

//     return dbPool.execute(SQLQuery);
// }

const {DataTypes} = Sequelize;

const User = dbPool.define('user',{
    nama: DataTypes.STRING,
    negara: DataTypes.STRING,
    kota: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    alamat: DataTypes.STRING,
    kodepos: DataTypes.STRING,
    no_telp: DataTypes.STRING,
    email: DataTypes.STRING
},{
    freezeTableName: true
});



(async()=>{
    await dbPool.sync();
})();

module.exports = {
    User
}