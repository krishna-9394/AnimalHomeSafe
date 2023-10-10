const mysql = require('mysql');

const db = mysql.createConnection({
    host: hostname,
    user: username,
    password: password,
    database: databasename
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

module.exports = db;