/* eslint-disable no-console */
const { Pool } = require('pg');

let dbName = 'eightbnb';
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
  user: 'postgres',
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
