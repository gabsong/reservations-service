# 8bnb Reserve Module

> Reserve an "8bnb space" module from 8bnb's listing page:
  - Examples: [one](https://www.airbnb.com/rooms/22193741), [two](https://www.airbnb.com/rooms/18506534)

## Related Projects
  - https://github.com/light-matter/8bnb-calendar-module
  - https://github.com/light-matter/8bnb-reviews-module
  - https://github.com/light-matter/8bnb-ImageCarousel

## Table of Contents
1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)

## Usage
> Some usage instructions

## Requirements
This project can be run from a docker container.
- Install [Docker](docker.com)

To run this project without docker, it requires:
- Node 12-LTS (erbium)
- NPM
- PostgreSQL 12.1

## Development
Install PostgreSQL in your MacOS:
```sh
brew install postgresql
brew services start postgresql
psql postgres
```

Create the required databases:
```sh
CREATE DATABASE test;
CREATE DATABASE eightbnb;
CREATE USER postgres;
\l
```

### Installing Dependencies
From within the root directory:
- If using docker, run `docker compose`
- Access via...

If installing dependencies directly:
- Run `npm install`

