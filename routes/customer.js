// Import necessary modules
const express = require('express');
const router = express.Router();


// Database connection
const connection = require('../db');

// Middleware for parsing JSON bodies
router.use(express.json());

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

// Handle POST request for user login
router.post('/sponsorTransaction', (req, res) => {
    // Extract email and amount from request body
    const email = req.body.email;
    const incrementValue = req.body.amount

    const sql_query = `UPDATE CUSTOMER SET sponsor_amount = sponsor_amount + ${incrementValue}, sponsor = true WHERE email = '${targetEmailId}'`;
    connection.query(sql_query, (err, results) => {
      if (err) {
        console.error('Error updating data:', err);
        return;
      }
      console.log(`Transaction Completed Successfully`);
    });
});

// Export the router to be used in other modules
module.exports = router;
