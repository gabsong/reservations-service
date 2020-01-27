const express = require('express');

const router = express.Router();
const db = require('../db');

/**
 * Skipping best practice and giving the route to write to DB directly
 * Future separation of concerns via:
 * - Models: control DB access (require db)
 * - Controllers: handle app logic (require models)
 * ... then, connect controller methods to their corresponding routes
 */

// router.get('/', async (req, res) => {
//   const data = await db.query('SELECT * FROM reservations');
//   return res.json(data.rows);
// });

// router.post('/', async (req, res) => {
//   const data = await db.query('INSERT INTO reservations (checkin_date, checkout_date, space_id) VALUES ($1, $2, $3) RETURNING *', [req.body.checkin_date, req.body.checkout_date, req.body.space_id]);
//   return res.json(data.rows[0]);
// });

module.exports = router;
