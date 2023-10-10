const mysql = require('mysql2');
const credentials = require('./credentials');

const db = mysql.createConnection({
    host: credentials.hostname,
    user: credentials.username,
    password: credentials.password,
    database: credentials.databasename
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

module.exports = db;