const dbPool = require('../config/database');

const getAllProduct = () => {
    const SQLQuery = 'SELECT * FROM product'

    return dbPool.execute(SQLQuery);
}

const createNewProduct = (body) => {
    const SQLQuery = `INSERT INTO product ( nama_product, jenis_product, stok) VALUES ('${body.nama_product}','${body.jenis_product}','${body.stok}')`;

    return dbPool.execute(SQLQuery);
}
module.exports = {
    getAllProduct,
    createNewProduct
}