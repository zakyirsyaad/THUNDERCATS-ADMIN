const dbPool = require('../config/database');
const { Sequelize } = require('sequelize');

const getAllProduct = () => {
    const SQLQuery = 'SELECT * FROM product'

    return dbPool.execute(SQLQuery);
}

// const createNewProduct = (body) => {
//     const SQLQuery = `INSERT INTO product ( nama_product, jenis_product, stok) VALUES ('${body.nama_product}','${body.jenis_product}','${body.stok}')`;

//     return dbPool.execute(SQLQuery);
// }

const {DataTypes} = Sequelize;

const Product = dbPool.define('product',{
    nama_product: DataTypes.STRING,
    jenis_product: DataTypes.STRING,
    harga: DataTypes.STRING,
    stok: DataTypes.STRING,
    foto: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName: true
});



(async()=>{
    await dbPool.sync();
})();

module.exports = {
    getAllProduct,
    Product,
    // createNewProduct
}