const express = require('express')
const router = express.Router();
const connection = require('../db');

router.use(express.json()); 

var session = {"email":"","password":""};

router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const query = "SELECT * FROM login_credentials WHERE email = \'"+email + "\'";
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
        const match = (password == user.password)

        if (!match) {
            return res.status(401).json({ status: 'Invalid credentials' });
        }
        session.email = email; // Set session variables
        session.password = password;
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

router.get('/userCredentials', (req, res) => {
    // Check if user is logged in
    console.log(session.email);
    if (session.email.length>0 && session.password.length>0) {
      // Return the user credentials stored in the session
      res.status(200).json({
        email: session.email,
        password: session.password,
        status: 'User is logged in'
      });
    } else {
      // If session variables are not set, user is not logged in
      res.status(401).json({
        status: 'User is not logged in'
      });
    }
  });
  

module.exports = router;