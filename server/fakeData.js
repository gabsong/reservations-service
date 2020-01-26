/* eslint-disable camelcase */
const faker = require('faker');
const add = require('date-fns/add');

// test if the file loads
console.log('Start fakeData file');

// generates fake data for the spaces table
const createFakeSpace = () => {
  const space = {};
  space.nightly_rate_cents = faker.random.number({ min: 4900, max: 25000 });
  space.cleaning_fee_cents = faker.random.number({
    min: 1000,
    max: Math.floor(space.nightly_rate_cents / 4)
  });
  space.service_fee_cents = faker.random.number({ min: 1000, max: 5000 });
  space.tax_rate_percent = Math.floor(space.service_fee_cents / 10);
  space.max_adult_guests = Math.floor(Math.random() * 5) + 1;
  space.min_stay_days = Math.floor(Math.random() * 7) + 1;

  return space;
};

// generates fake data for the reservations table
const createFakeReservation = (min, max) => {
  const reservation = {};
  reservation.checkin_date = faker.date.between('2020-02-01', '2020-06-30');
  const twoDaysAfterCheckin = add(reservation.checkin_date, { days: 2 });
  const tenDaysAfterCheckin = add(reservation.checkin_date, { days: 10 });
  reservation.checkout_date = faker.date.between(twoDaysAfterCheckin, tenDaysAfterCheckin);
  reservation.space_id = Math.floor(Math.random() * (max - min + 1)) + min;

  return reservation;
};

// testing the fake data generator
const length = 100;
for (let i = 0; i < 10; i++) {
  console.log(createFakeSpace());
  console.log(createFakeReservation(1, 10));
}