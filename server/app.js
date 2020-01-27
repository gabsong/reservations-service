const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(morgan('dev')); // for logging http requests to the terminal
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/', express.static(path.join(__dirname, '../public'))); // for serving static files

// this is a test
const students = ['Vikas', 'Will', 'Jeremiah', 'Gabriel'];
const studentRoutes = require('./routes/students');

app.use('/students', studentRoutes);
app.get('/test', (req, res) => res.json(students));

module.exports = app;
