const express = require('express')
const router = express.Router();
const connection = require('../db');

const baseQuery = "select ac.id, ac.name, ac.contact_number, ad.street_name, ad.city, ad.state, ad.pincode from adoption_center as ac join address as ad on ac.address_id = ad.address_id";

const baseQuery2 = "select a.common_animal_name as common_name, a.breed, a.size, a.description_info as description, list.animal_count as count from ANIMALS_LIST_IN_ADOPTION_CENTERS as list join animal as a on a.animal_id = list.animal_id where list.center_id = ";

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
    const adoptionCenterId = req.query.adoption_center_id;
    const sql_query = baseQuery+" where ac.id = " + adoptionCenterId + ";";
    connection.query(sql_query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.send('Error fetching data from database');
            return;
        }
        res.json(results);
    });
});

router.get('/adoption_center_name', (req, res) => {
    const adoptionCenterName = req.query.adoption_center_name;
    const sql_query = baseQuery + " where ac.name LIKE '" + adoptionCenterName + "%' OR ac.name LIKE '%" + adoptionCenterName + "' OR ac.name LIKE '%" + adoptionCenterName +"%';";
     connection.query(sql_query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.send('Error fetching data from database');
            return;
        }
        res.json(results);
    });
});

router.get('/common_name', (req, res) => {
    const commonName = req.query.common_name;
    const sql_query = `select ac.id, ac.name, ac.contact_number, adr.street_name, adr.city, adr.state, adr.pincode from animals_list_in_adoption_centers list join animal a join adoption_center ac join address adr on list.animal_id = a.animal_id and list.center_id = ac.id and ac.address_id = adr.address_id where a.common_animal_name Like '%${commonName}' or a.common_animal_name like '${commonName}%' or a.common_animal_name Like '%${commonName}%';`;
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
    const city = req.query.city;
    const sql_query = baseQuery + " where ad.city LIKE '" + city + "%' OR ad.city LIKE '%" + city + "' OR ad.city LIKE '%" + city +"%';";
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
    const state = req.query.state;
    const sql_query = baseQuery + " where ad.state LIKE '" + state + "%' OR ad.state LIKE '%" + state + "' OR ad.state LIKE '%" + state +"%';";
    connection.query(sql_query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.send('Error fetching data from database');
            return;
        }
        res.json(results);
    });
});

router.get('/id/animals', (req,res) => {
    const id = req.query.adoption_center_id;
    const sql_query = baseQuery2+id+";";
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