const express = require('express')
const router = express.Router();
const connection = require('../db');

router.get('/', (req, res) => {
    res.send('List of all pet clinic');
});

router.get('/id', (req, res) => {
    const userId = req.query.id;
    const sql_query = "select * from address where address_id = "+userId+";";
    connection.query(sql_query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.send('Error fetching data from database');
            return;
        }
        res.json(results);
    });
});

router.get('/city', (req,res) => {
    const city_name = req.query.city;
    const sql_query = 'select * from address where city = "' + city_name + '";';
    connection.query(sql_query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.send('Error fetching data from database');
            return;
        }
        console.log(results);
        res.json(results);
    });
});

router.get('/state', (req, res) => {
    const state_name = req.query.state;
    const sql_query = 'select * from address where city = "' + state_name + '";';
    connection.query(sql_query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.send('Error fetching data from database');
            return;
        }
        console.log(results);
        res.json(results);
    });
});


module.exports = router;