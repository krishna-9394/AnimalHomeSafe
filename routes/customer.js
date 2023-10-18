const express = require('express');
const router = express.Router();

const connection = require('../db');

const baseQuery = 'select name, email, sponsor_amount from CUSTOMER ';

router.get('/topFiveSponsors', (req,res) => {
    const sql_query = baseQuery+" order by sponsor_amount desc limit 5;";
    connection.query(sql_query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.send('Error fetching data from database');
            return;
        }
        res.json(results);
    });
});


module.exports = router;
