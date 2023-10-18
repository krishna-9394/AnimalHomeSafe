// Importing express module 
const express = require("express");
const app = express();

const cors = require('cors');
const whitelist = ['http://127.0.0.1:5500'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors());


const pet_clinic = require('./routes/pet_clinic');
const zoos = require('./routes/zoos');
const animalPlace = require('./routes/animalPlace');
const customer = require('./routes/customer');
const retailStore = require('./routes/retail_store');

app.use('/routes/pet_clinic/',pet_clinic);
app.use('/routes/zoos/',zoos);
app.use('/routes/animalPlace/',animalPlace);
app.use('/routes/customer/',customer);
app.use('/routes/retail_store/',retailStore);

app.get('/', (req,res) => {
    res.send("You have entered common url");
})

// Server setup 
app.listen(3000, () => {
    console.log("Server is Running")
}) 
