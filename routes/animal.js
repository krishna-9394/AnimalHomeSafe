const express = require('express');
const router = express.Router();

const connection = require('../db');

router.get('/', (req,res) => {
    // list of all pets
    
});

router.get('/id', (req,res) => {
    // details of specific details
});

const base_Query2 = 'SELECT Guidelines FROM StrayAnimalGuidelines'
router.get('/strayAnimals', (req, res) => {
    const animal_name = req.query.strayAnimals; 
    const sql_query = base_Query2 + " where AnimalType = '" + animal_name+ "'"; 
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