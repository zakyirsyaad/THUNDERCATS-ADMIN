const dbPool = require('../config/database');
const getAlltransaksi = () => {
    const SQLQuery = 'SELECT * FROM transaksi';


    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAlltransaksi
}