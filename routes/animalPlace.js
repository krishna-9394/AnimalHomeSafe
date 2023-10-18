const express = require('express')
const router = express.Router();

const connection = require('../db');

const baseQuery = "select * from ANIMAL_PLACE JOIN ADDRESS WHERE ADDRESS.address_id = ANIMAL_PLACE.address_id";

router.get('/', (req, res) => {
    const sql_query = baseQuery+" order by rand() limit 5;";
    connection.query(sql_query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.send('Error fetching data from database');
            return;
        }
        res.json(results);
    });
});

router.get('/id', (req, res) => {
    const userId = req.query.id;
    const sql_query = baseQuery+" and ap.place_id = " + userId + ";";
    connection.query(sql_query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.send('Error fetching data from database');
            return;
        }
        res.json(results);
    });
});

router.get('/city', (req, res) => {
    const city_name = req.query.city;
    const sql_query = customQuery+' and adr.city = "' + city_name + '";';
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
    const sql_query = customQuery+' and adr.state = "' + state_name + '";';
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