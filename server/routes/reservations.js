const Router = require('express-promise-router');
const db = require('../db');

const router = new Router();

/**
 * Skipping best practice and giving the route to write to DB directly
 * Future separation of concerns via:
 * - Models: control DB access (require db)
 * - Controllers: handle app logic (require models)
 * ... then, connect controller methods to their corresponding routes
 * In app.js: app.use('/reservations', reservationsRouter)
 */

router.get('/', async (req, res, next) => {
  try {
    const { spaceId } = req.query;
    const data = await db.query('SELECT * FROM reservations WHERE space_id = $1 ORDER BY checkin_date ASC', [spaceId]);
    // }
    return res.send(data.rows);
  } catch (err) {
    return next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { checkinDate, checkoutDate, spaceId } = req.body;
    const data = await db.query('INSERT INTO reservations (checkin_date, checkout_date, space_id) VALUES ($1, $2, $3) RETURNING *', [checkinDate, checkoutDate, spaceId]);
    return res.send(data.rows[0]);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
