// Importing express module 
const express = require("express")
const app = express()

const pet_clinic = require('./routes/pet_clinic');
const zoos = require('./routes/zoos');
const wildlife_sanctuary = require('./routes/wildlife_sanctuary');
const customer = require('./routes/customer');

app.use('/routes/pet_clinic/',pet_clinic);
app.use('/routes/zoos/',zoos);
app.use('/routes/wildlife_sanctuary/',wildlife_sanctuary);
app.use('/routes/customer/',customer);

app.get('/', (req,res) => {
    res.send("You have entered common url");
})

// Server setup 
app.listen(3000, () => {
    console.log("Server is Running")
}) 
