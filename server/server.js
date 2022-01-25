
// Require statements
const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const jwt = require("jsonwebtoken");
// Declare and assign values to constants

// Instantiate the app (express server) object
const app = express();

//Configure the app / server object with app.use
app.use(cookieParser());
// Changed the app.use(cors()) to the one below
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Require any configurations / middleware
require('dotenv').config();
require("./config/mongoose.config");

// Add all of the routes
require('./routes/user.routes')(app);

// Start the server listening on desired port
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})