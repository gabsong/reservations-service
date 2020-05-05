/**
 * @file Defines the queries for the reservations table.
 */

const db = require('../');

const retrieveReservationsBySpaceId = async (spaceId) => {
  const query = {
    text: 'SELECT * FROM reservations WHERE space_id = $1 ORDER BY checkin_date ASC',
    values: [spaceId],
  };
  const { rows: reservations } = await db.query(query);
  return reservations;
};

const createReservation = async (checkinDate, checkoutDate, spaceId) => {
  const query = {
    text: 'INSERT INTO reservations (checkin_date, checkout_date, space_id) VALUES ($1, $2, $3) RETURNING *',
    values: [checkinDate, checkoutDate, spaceId],
  };
  const { rows: reservations } = await db.query(query);
  return reservations[0];
};

module.exports = {
  retrieveReservationsBySpaceId,
  createReservation,
}