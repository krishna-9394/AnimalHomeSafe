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



router.get('/placeName', (req, res) => {
    const place_name = req.query.placeName; 
    const sql_query = baseQuery + " and name like \'%" + place_name + "%\' ;"; 
    
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
    const sql_query = baseQuery + " and city like \'%" + city_name + "%\' ;"; 
    
    connection.query(sql_query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.send('Error fetching data from database');
            return;
        }
        res.json(results);
    });
});

router.get('/state', (req, res) => {
    const state_name = req.query.state; 
    const sql_query = baseQuery + " and state like \'%" + state_name + "%\' ;"; 
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