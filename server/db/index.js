/* eslint-disable no-console */

/**
 * @file Opens a connection to the PostgreSQL database
 * Use environment variables to pass ENV information.
 */

const { userName } = require('../../config');

const { Pool } = require('pg');

let dbName = 'vacationrentals';
if (process.env.NODE_ENV === 'test') {
  dbName = 'test';
}

let hostname = 'localhost';
if (process.env.NODE_ENV === 'production') {
  hostname = 'database';
}

// Postgres login information
const pool = new Pool({
  host: hostname,
  user: userName,
  database: dbName,
  password: null,
  port: 5432,
});

// Event listener for DB connection open
pool.on('connect', () => console.log('Connected to the db'));

// Event listener for DB connection close
pool.on('remove', () => {
  console.log('Client removed');
});

module.exports = pool;
