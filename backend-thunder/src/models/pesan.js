const dbPool = require('../config/database');

const getAllpesan = () => {
    const SQLQuery = 'SELECT * FROM pesan';


    return dbPool.execute(SQLQuery);
}

const createNewpesan = (body) => {
    const SQLQuery = `INSERT INTO pesan (nama, email, pesan) VALUES ('${body.nama}','${body.email}','${body.pesan}')`;

    return dbPool.execute(SQLQuery);
}



module.exports = {
    getAllpesan,
    createNewpesan
}