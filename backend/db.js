const mysql = require('mysql2/promise');

const pool =mysql.createPool({
     host: 'localhost',
     user: 'root',
     password: '',
     database: 'nodejs',
     multipleStatements: true
})

module.exports = pool;
