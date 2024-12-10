// Import necessary modules
const express = require("express"); // Express for handling HTTP requests
const path = require("path"); // Path module for handling file paths
const app = express(); // Initialize Express app

const cors = require('cors'); // CORS middleware for handling cross-origin requests

// Define whitelist for acceptable origins
const whitelist = process.env.NODE_ENV === 'production'
  ? ['https://your-app.vercel.app'] // Production URL
  : ['http://127.0.0.1:5500']; // Development URL

const corsOptions = {
  origin: function (origin, callback) {
    // Check if origin is in whitelist
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      // Reject requests from non-whitelisted origins
      callback(new Error('Not allowed by CORS'));
    }
  }
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, "frontend")));

// Import route modules
const pet_clinic = require('./routes/pet_clinic');
const zoos = require('./routes/zoos');
const animalPlace = require('./routes/animalPlace');
const customer = require('./routes/customer');
const retailStore = require('./routes/retail_store');
const animalList = require('./routes/animal');
const adoptionCenterList = require('./routes/adoption_center');
const authentication = require('./routes/authentication');

// Map routes to their respective endpoints
app.use('/routes/pet_clinic/', pet_clinic);
app.use('/routes/zoos/', zoos);
app.use('/routes/animalPlace/', animalPlace);
app.use('/routes/customer/', customer);
app.use('/routes/retail_store/', retailStore);
app.use('/routes/animal/', animalList);
app.use('/routes/adoption_center/', adoptionCenterList);
app.use('/routes/authentication/', authentication);

// Catch-all route to serve the frontend for unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server on port 3000
app.listen(3000, () => {
  console.log("Server is Running on Port Number: 3000"); // Log when the server is running
});
