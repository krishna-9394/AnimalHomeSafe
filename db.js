// Import the required modules
const mysql = require('mysql2'); // Import the MySQL for Node.js library
require('dotenv').config(); // Import database credentials

// Create a new database connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Connect to the database
db.connect(err => {
    if (err) {
        // Log an error message if the connection fails
        console.error('Error connecting to the database:', err);
        return;
    }
    // Log a success message if the connection is successful
    console.log('Connected to the MySQL database.');
});

// Export the database connection
module.exports = db;
