// Import the required modules
const express = require('express');
const router = express.Router();
const connection = require('../db');

// Define base SQL queries to be used later
const baseQuery = "select ap.place_id as id, ap.name as name, ap.type_of_place as type, adr.street_name as street_name, adr.city as city, adr.state as state, adr.pincode from pet_clinic as pc join address as adr on pc.address_id = adr.address_id where type_of_place = 'zoo'";
const customQuery = "select ap.place_id as id, ap.name as name, ap.type_of_place as type from pet_clinic as pc join address as adr on pc.address_id = adr.address_id where type_of_place = 'zoo'";

// Route to fetch all records
router.get('/', (req, res) => {
    // Construct the SQL query
    const sql_query = customQuery + ";";

    // Execute the SQL query
    connection.query(sql_query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.send('Error fetching data from database');
            return;
        }
        // Send the results as JSON
        res.json(results);
    });
});

// Route to fetch records by ID
router.get('/id', (req, res) => {
    // Extract user ID from query parameters
    const userId = req.query.id;

    // Construct the SQL query
    const sql_query = baseQuery + " and ap.place_id = " + userId + ";";

    // Execute the SQL query
    connection.query(sql_query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.send('Error fetching data from database');
            return;
        }
        // Send the results as JSON
        res.json(results);
    });
});

// Route to fetch records by city
router.get('/city', (req, res) => {
    // Extract city name from query parameters
    const city_name = req.query.city;

    // Construct the SQL query
    const sql_query = customQuery + ' and adr.city = "' + city_name + '";';

    // Execute the SQL query
    connection.query(sql_query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.send('Error fetching data from database');
            return;
        }
        // Log and send the results as JSON
        console.log(results);
        res.json(results);
    });
});

// Route to fetch records by state
router.get('/state', (req, res) => {
    // Extract state name from query parameters
    const state_name = req.query.state;

    // Construct the SQL query
    const sql_query = customQuery + ' and adr.state = "' + state_name + '";';

    // Execute the SQL query
    connection.query(sql_query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.send('Error fetching data from database');
            return;
        }
        // Log and send the results as JSON
        console.log(results);
        res.json(results);
    });
});

// Export the router to be used in other parts of the application
module.exports = router;
