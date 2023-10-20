const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');
const connection = require('../db');

router.use(express.json()); 

router.post('/login', (req, res) => {
    console.log(req.body)
    const email = req.body.email;
    const password = req.body.password;
    const query = "SELECT * FROM login_credentials WHERE email = \'"+email + "\'";
    console.log(query);
    connection.query(query,(err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return results;
        }
        console.log(results)
        if (results.length === 0) {
            return res.status(401).json({ status: 'Invalid Credentials' });
        }

        const user = results[0];
        console.log(user);
        const match = (password == user.password)

        if (!match) {
            return res.status(401).json({ status: 'Invalid credentials' });
        }

        res.status(200).json({ status: 'Logged in successfully' });
    });
});

module.exports = router;