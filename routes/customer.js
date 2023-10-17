const express = require('express');
const router = express.Router();

const connection = require('../db');

const baseQuery = 'select name, email, address_id, contact_number, sponsor, sponsor_amount from CUSTOMER ';

router.get('/defaultSponsorsResults', (req, res) => {
    const sql_query = baseQuery+" where sponsor_amount > 0  order by rand()  limit 5 ;";
    connection.query(sql_query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.send('Error fetching data from database');
            return;
        }
        res.json(results);
    });
});

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
