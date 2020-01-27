process.env.NODE_ENV = 'test';
const request = require('supertest');
const db = require('./db/index.js');
const app = require('./app.js');

beforeAll(async () => {
  const spaces = `CREATE TABLE public.spaces (
    id BIGSERIAL PRIMARY KEY,
    nightly_rate_cents INT NOT NULL,
    cleaning_fee_cents INT NOT NULL,
    service_fee_cents INT NOT NULL,
    tax_rate_cents INT NOT NULL,
    max_adult_guests INT NOT NULL,
    min_stay_nights INT NOT NULL
  )`;
  const reservations = `CREATE TABLE public.reservations (
    id BIGSERIAL PRIMARY KEY,
    checkin_date DATE NOT NULL DEFAULT CURRENT_DATE,
    checkout_date DATE NOT NULL DEFAULT CURRENT_DATE,
    space_id INT REFERENCES public.spaces (id)
  )`;
  await db.query(spaces);
  await db.query(reservations);
});

beforeEach(async () => {
  const spaces = `INSERT INTO public.spaces (nightly_rate_cents, cleaning_fee_cents, service_fee_cents, tax_rate_cents, max_adult_guests, min_stay_nights) VALUES
  (10000, 2500, 2000, 10, 2, 2),
  (15000, 3000, 2500, 10, 4, 3)`;
  const reservations = `INSERT INTO public.reservations (checkin_date, checkout_date, space_id) VALUES
  ('2020-01-27', '2020-01-28', 1),
  ('2020-01-29', '2020-01-31', 2)`;
  await db.query(spaces);
  await db.query(reservations);
});

afterEach(async () => {
  await db.query('DELETE FROM reservations');
  await db.query('DELETE FROM spaces');
});

afterAll(async () => {
  await db.query('DROP TABLE reservations, spaces');
  db.end();
});
