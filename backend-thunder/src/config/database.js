const mysql = require('mysql2');

const dbPool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tc_db2',
});

module.exports = dbPool.promise()