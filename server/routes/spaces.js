const Router = require('express-promise-router');
const db = require('../db');

const router = new Router();

router.get('/', async (req, res, next) => {
  try {
    const { id } = req.query;
    let data;
    if (!id) {
      data = await db.query('SELECT * FROM spaces');
    } else {
      data = await db.query('SELECT * FROM spaces WHERE id = $1', [id]);
    }
    return res.send(data.rows);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
