/*
 *  Execute this file from the terminal
 *  `psql --username=postgres -d eightbnb < schema.sql`
 *  - `eightbnb` is the database (created beforehand)
 *  - `postgres` is the role (created beforehand)
 *  Note: need to figure out hardening of DB
 *  - `ALTER ROLE <username> WITH ENCRYPTED PASSWORD '<password>';`
 *  - `\conninfo` => You are connected to database "eightbnb" as user "postgres"
 *                   via socket in "/tmp" at port "5432"
 */

DROP TABLE IF EXISTS public.reservations;
DROP TABLE IF EXISTS public.spaces;

-- This table stores the Airbnb spaces and their prices (no dynamic pricing)
CREATE TABLE public.spaces (
  id BIGSERIAL PRIMARY KEY,
  nightly_rate_cents INT NOT NULL,
  cleaning_fee_cents INT NOT NULL,
  service_fee_cents INT NOT NULL,
  tax_rate_cents INT NOT NULL,
  max_adult_guests INT NOT NULL,
  min_stay_nights INT NOT NULL
);

-- This table stores all reservations, and links to a space via the space_id
CREATE TABLE public.reservations (
  id BIGSERIAL PRIMARY KEY,
  checkin_date DATE NOT NULL DEFAULT CURRENT_DATE,
  checkout_date DATE NOT NULL DEFAULT CURRENT_DATE,
  space_id INT REFERENCES public.spaces (id)
);
