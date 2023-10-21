// Import necessary modules
const express = require('express');
const router = express.Router();

// Database connection
const connection = require('../db');

// Base SQL query for fetching customer information
const baseQuery = 'select name, email, sponsor_amount from CUSTOMER ';

// Endpoint to fetch the top five sponsors based on their sponsorship amount
router.get('/topFiveSponsors', (req, res) => {
    // Construct SQL query to sort by sponsor_amount and limit to 5 entries
    const sql_query = baseQuery + " order by sponsor_amount desc limit 5;";

    // Execute SQL query
    connection.query(sql_query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.send('Error fetching data from database');
            return;
        }
        // Send the result as JSON if the query is successful
        res.json(results);
    });
});

// Export the router to be used in other modules
module.exports = router;
