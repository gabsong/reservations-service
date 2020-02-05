const express = require('express');
const path = require('path');
const morgan = require('morgan');
const reservationsRouter = require('./routes/reservations.js');
const spacesRouter = require('./routes/spaces.js');

const app = express();

// Middleware
app.use(morgan('dev')); // for logging http requests to the terminal
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/', express.static(path.join(__dirname, '../public'))); // for serving static files

// Set up routes
app.use('/reservations', reservationsRouter);
app.use('/spaces', spacesRouter);

module.exports = app;
