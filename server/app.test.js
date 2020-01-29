process.env.NODE_ENV = 'test';
const request = require('supertest');
const db = require('./db/index.js');
const app = require('./app.js');

beforeAll(async () => {
  const createSpacesTable = `CREATE TABLE public.spaces (
    id BIGSERIAL PRIMARY KEY,
    nightly_rate_cents INT NOT NULL,
    cleaning_fee_cents INT NOT NULL,
    service_fee_cents INT NOT NULL,
    tax_rate_cents INT NOT NULL,
    max_adult_guests INT NOT NULL,
    min_stay_nights INT NOT NULL
  )`;
  await db.query(createSpacesTable);

  const insertSpaces = `INSERT INTO public.spaces (nightly_rate_cents, cleaning_fee_cents, service_fee_cents, tax_rate_cents, max_adult_guests, min_stay_nights) VALUES
  (10000, 2500, 2000, 10, 2, 2),
  (15000, 3000, 2500, 10, 4, 3)`;
  await db.query(insertSpaces);
});

beforeEach(async () => {
  const createReservationsTable = `CREATE TABLE public.reservations (
    id BIGSERIAL PRIMARY KEY,
    checkin_date DATE NOT NULL DEFAULT CURRENT_DATE,
    checkout_date DATE NOT NULL DEFAULT CURRENT_DATE,
    space_id INT REFERENCES public.spaces (id)
  )`;
  await db.query(createReservationsTable);

  const reservations = `INSERT INTO public.reservations (checkin_date, checkout_date, space_id) VALUES
  ('2020-01-27', '2020-01-28', 1),
  ('2020-01-29', '2020-01-31', 2)`;
  await db.query(reservations);
});

afterEach(async () => {
  await db.query('DROP TABLE reservations');
});

afterAll(async () => {
  await db.query('DROP TABLE spaces');
  db.end();
});

// Integration testing
describe('GET /reservations', () => {
  test('It responds with an array of reservation objects', async () => {
    const response = await request(app).get('/reservations');
    expect(response.body.length).toBe(2);
    expect(response.body[0]).toHaveProperty('checkin_date');
    expect(response.body[0]).toHaveProperty('checkout_date');
    expect(response.body[0]).toHaveProperty('space_id');
    expect(response.statusCode).toBe(200);
  });
});

describe('POST /reservations', () => {
  test('It responds with the newly added reservation', async () => {
    const newReservation = await request(app)
      .post('/reservations')
      .send({
        checkin_date: '2099-01-01',
        checkout_date: '2099-12-31',
        space_id: 1,
      });

    // make sure we add it correctly
    expect(newReservation.body.checkin_date.substring(0, 10)).toBe('2099-01-01');
    expect(newReservation.statusCode).toBe(200);

    // make sure we have 3 reservations now
    const response = await request(app).get('/reservations');
    expect(response.body.length).toBe(3);
  });
});
