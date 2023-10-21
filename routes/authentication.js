const express = require('express')
const router = express.Router();
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


router.post('/signUp', (req, res) => {
    console.log(req.body)
    const name = req.body.name
    const email = req.body.email;
    const password = req.body.password;
    const contact = req.body.contact;

    const query = "SELECT * FROM login_credentials WHERE email = \'"+email + "\'";
    console.log(query);
    var ans = 0;
    connection.query(query,(err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return results;
        }
        console.log(results)
        if (results.length !== 0) {
            return res.status(401).json({ status: 'Email already exists' });
        } 
    });

    const procedureQuery = `CALL AddCustomerAndCredentials('${name}', '${contact}', '${email}', '${password}');`;

    console.log(procedureQuery);
    connection.query(procedureQuery,(err,results) => {
        if(err) {
            return results;
        }else {
            return res.status(200).json({ status: 'Account created successfully' });
        }
    });
});

module.exports = router;