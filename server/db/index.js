const { Pool } = require('pg');

const dbName = process.env.NODE_ENV === 'test' ? 'test' : 'eightbnb';

// Postgres login information
const pool = new Pool({
  host: 'localhost',
  user: 'student',
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
