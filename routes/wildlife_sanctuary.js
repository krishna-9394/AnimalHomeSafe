const express = require('express')
const router = express.Router();

const connection = require('../db');

const baseQuery = "select ap.place_id as id, ap.name as name, ap.type_of_place as type, adr.street_name as street_name, adr.city as city, adr.state as state, adr.pincode from pet_clinic as pc join address as adr on pc.address_id = adr.address_id where type_of_place <> 'zoo'";

router.get('/', (req, res) => {
    const sql_query = baseQuery+";";
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
    const sql_query = baseQuery+' and adr.city = "' + city_name + '";';
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
    const sql_query = baseQuery+' and adr.state = "' + state_name + '";';
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