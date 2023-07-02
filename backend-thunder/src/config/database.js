const mysql = require('mysql2');

// const dbPool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: '_Jinan022',
//   database: 'thundercats_db',
// });



const { Sequelize } = require('sequelize');

<<<<<<< HEAD
const dbPool = new Sequelize('thundercat', 'root', '', {
=======
const dbPool = new Sequelize('thundercat_db','root','',{
>>>>>>> 499e8ad57939229adf829bdba21e7bc2ea0f56ef
    host: 'localhost',
    dialect: "mysql"
});

module.exports = dbPool;
// export default dbPool;