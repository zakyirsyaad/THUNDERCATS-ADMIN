const mysql = require('mysql2');

// const dbPool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: '_Jinan022',
//   database: 'thundercats_db',
// });



const { Sequelize } = require('sequelize');

const dbPool = new Sequelize('thundercats_db','root','_Jinan022',{
    host: 'localhost',
    dialect: "mysql"
});

 module.exports = dbPool;
// export default dbPool;