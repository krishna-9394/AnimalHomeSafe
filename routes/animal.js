const express = require('express');
const router = express.Router();

const connection = require('../db');

router.get('/', (req,res) => {
    // list of all pets
    
});

router.get('/id', (req,res) => {
    // details of specific details
});

module.export = router;