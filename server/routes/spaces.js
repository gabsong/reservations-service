const Router = require('express-promise-router');
const db = require('../db');

const router = new Router();

router.get('/', async (req, res, next) => {
  try {
    const { id } = req.query;
    const data = await db.query('SELECT * FROM spaces WHERE id = $1', [id]);
    return res.send(data.rows[0]);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
