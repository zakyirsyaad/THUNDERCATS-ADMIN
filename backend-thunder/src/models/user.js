const dbPool = require('../config/database');

const getAlluser = () => {
    const SQLQuery = 'SELECT * FROM user';


    return dbPool.execute(SQLQuery);
}

const createNewuser = (body) => {
    const SQLQuery = `INSERT INTO user (username, email, password, nama_user, no_telp, alamat) VALUES ('${body.username}','${body.email}','${body.password}','${body.nama_user}','${body.no_telp}','${body.alamat}')`;

    return dbPool.execute(SQLQuery);
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