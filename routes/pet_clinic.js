const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('List of all pet clinic');
});

router.get('/id', (req, res) => {
    const userId = req.query.id;
    res.send('Details of Pet_clinic with Id: '+userId);
});

router.get('/city', (req,res) => {
    const city_name = req.query.city;
    res.send('List of Pet_clinic in City: '+city_name);
});

router.get('/state', (req, res) => {
    const state = req.query.state;
    res.send('List of Pet_clinic in state: '+state);
});


module.exports = router;