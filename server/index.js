const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const port = 3015;
const faker = require('./fakeData.js');
const db = require('./db'); // test db connection

// Middleware
app.use(morgan('dev')); // for logging http requests to the terminal
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/', express.static(path.join(__dirname, '../public'))); // for serving static files

app.listen(port, () => {
  console.log(`App in mode: '${process.env.NODE_ENV}' listening on port ${port}!`);
});