/*
 *  Execute this file from the terminal
 *  `psql --username=student -d eightbnb < schema.sql`
 *  - `eightbnb` is the database (created beforehand)
 *  - `student` is the role (created beforehand)
 *  Note: need to figure out hardening of DB
 *  - `ALTER ROLE <username> WITH ENCRYPTED PASSWORD '<password>';`
 *  - `\conninfo` => You are connected to database "eightbnb" as user "student"
 *                   via socket in "/tmp" at port "5432"
 */

DROP TABLE IF EXISTS public.reservations;
DROP TABLE IF EXISTS public.spaces;

CREATE TABLE public.spaces (
  id BIGSERIAL PRIMARY KEY,
  nightly_rate_cents INT NOT NULL,
  cleaning_fee_cents INT NOT NULL,
  service_fee_cents INT NOT NULL,
  tax_rate_percent INT NOT NULL,
  max_guests INT NOT NULL
);

CREATE TABLE public.reservations (
  id BIGSERIAL PRIMARY KEY,
  checkin_date DATE NOT NULL DEFAULT CURRENT_DATE,
  checkout_date DATE NOT NULL DEFAULT CURRENT_DATE,
  space_id INT REFERENCES public.spaces (id)
);

INSERT INTO public.spaces (nightly_rate_cents, cleaning_fee_cents, service_fee_cents, tax_rate_percent, max_guests) VALUES
  (10000, 2500, 2000, 10, 2),
  (15000, 3000, 2500, 10, 4);

INSERT INTO public.reservations (checkin_date, checkout_date, space_id) VALUES
  ('2020-02-01', '2020-02-07', 1),
  ('2020-02-08', '2020-02-10', 2);