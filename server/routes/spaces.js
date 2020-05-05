const Router = require('express-promise-router');
const { retrieveSpaceById } = require('../db/queries/spaces');

const router = new Router();

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const space = await retrieveSpaceById(id);
    res.send(space);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
