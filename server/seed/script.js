const db = require('../db/index.js');
const fakers = require('./fakers.js');

// create spaces data seed
const spaces = [];
let spacesCount = 20;
while (spacesCount > 0) {
  spaces.push(fakers.createSpace(3900, 20000));
  spacesCount -= 1;
}

// create reservations data seed
const reservations = [];
let reservationsCount = 200;
while (reservationsCount > 0) {
  reservations.push(fakers.createReservation(1, 20, '2020-02-01', '2020-06-30'));
  reservationsCount -= 1;
}

// seed db using the promise pattern
const spaceInsert = 'INSERT INTO public.spaces (nightly_rate_cents, cleaning_fee_cents, service_fee_cents, tax_rate_cents, max_adult_guests, min_stay_nights) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
const spacePromises = spaces.map((space) => db.query(spaceInsert, Object.values(space)));

Promise.all(spacePromises)
  .then((res) => {
    console.log('Spaces:', res.length);
    const reservationInsert = 'INSERT INTO public.reservations (checkin_date, checkout_date, space_id) VALUES ($1, $2, $3) RETURNING *';
    return reservations.map((reservation) => db.query(reservationInsert, Object.values(reservation)));
  })
  .then((reservationPromises) => Promise.all(reservationPromises))
  .then((res) => console.log('Reservations:', res.length))
  .catch((err) => console.error(err.stack))
  .finally(() => db.end());
