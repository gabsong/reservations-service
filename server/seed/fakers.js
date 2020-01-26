/* eslint-disable camelcase */
const faker = require('faker');
const add = require('date-fns/add');

// generates fake data for the spaces table
const createSpace = (minPriceInCents, maxPriceInCents) => {
  const space = {};
  space.nightly_rate_cents = faker.random.number({
    min: minPriceInCents,
    max: maxPriceInCents
  });
  space.cleaning_fee_cents = faker.random.number({
    min: Math.floor(space.nightly_rate_cents / 5),
    max: Math.floor(space.nightly_rate_cents / 3)
  });
  space.service_fee_cents = faker.random.number({
    min: Math.floor(space.nightly_rate_cents / 8),
    max: Math.floor(space.nightly_rate_cents / 6)
  });
  space.tax_rate_cents = Math.trunc(space.service_fee_cents / 10);
  space.max_adult_guests = faker.random.number({ min: 2, max: 6 });
  space.min_stay_nights = faker.random.number({ min: 1, max: 6 });

  return space;
};

// generates fake data for the reservations table
const createReservation = (firstSpaceId, lastSpaceId, firstCheckin, lastCheckin) => {
  const reservation = {};
  reservation.checkin_date = faker.date.between(firstCheckin, lastCheckin);
  const twoDaysAfter = add(reservation.checkin_date, { days: 2 });
  const tenDaysAfter = add(reservation.checkin_date, { days: 10 });
  reservation.checkout_date = faker.date.between(twoDaysAfter, tenDaysAfter);
  reservation.space_id = faker.random.number({ min: firstSpaceId, max: lastSpaceId });

  return reservation;
};

module.exports = { createSpace, createReservation };