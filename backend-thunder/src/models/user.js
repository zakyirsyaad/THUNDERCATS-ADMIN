const dbPool = require('../config/database');

const getAlluser = () => {
    const SQLQuery = 'SELECT * FROM user';


    return dbPool.execute(SQLQuery);
}

const createNewuser = (body) => {
    const SQLQuery = 'INSERT INTO user (nama, negara, kota, kecamatan, alamat, kodepos, no_telp, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [body.nama, body.negara, body.kota, body.kecamatan, body.alamat, body.kodepos, body.no_telp, body.email];
  
    return dbPool.execute(SQLQuery, values);
  }

const loginUser = (body) => {
    const { username, password } = body;
    const SQLQuery = `SELECT * FROM user WHERE username = '${username}' AND password = '${password}'`;
    return dbPool.execute(SQLQuery);

}

module.exports = {
    getAlluser,
    createNewuser,
    loginUser
}