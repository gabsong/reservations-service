const Router = require('express-promise-router');
const { retrieveReservationsBySpaceId, createReservation } = require('../db/queries/reservations');

const router = new Router();

router.get('/', async (req, res, next) => {
  try {
    const { spaceId } = req.query;
    const reservations = await retrieveReservationsBySpaceId(spaceId);
    res.send(reservations);
  } catch (err) {
    return next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { checkinDate, checkoutDate, spaceId } = req.body;
    const reservation = await createReservation(checkinDate, checkoutDate, spaceId);
    res.send(reservation);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
