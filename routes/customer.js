const express = require('express');
const router = express.Router();

const connection = require('../db');

const baseQuery = '';

router.get('/', (req,res) => {
    // list of all customers
});

router.get('/id', (req,res) => {
    // details of specific customers
});

router.get('/topSponsors',(req,res) => {
    
});

module.export = router;
