const Router = require('express-promise-router');
const db = require('../db');

const router = new Router();

/**
 * Skipping best practice and giving the route to write to DB directly
 * Future separation of concerns via:
 * - Models: control DB access (require db)
 * - Controllers: handle app logic (require models)
 * ... then, connect controller methods to their corresponding routes
 */

router.get('/', async (req, res, next) => {
  try {
    const data = await db.query('SELECT * FROM reservations');
    return res.send(data.rows);
  } catch (err) {
    return next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const data = await db.query('INSERT INTO reservations (checkin_date, checkout_date, space_id) VALUES ($1, $2, $3) RETURNING *', [req.body.checkin_date, req.body.checkout_date, req.body.space_id]);
    return res.send(data.rows[0]);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
