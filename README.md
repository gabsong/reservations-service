# Reservations Service
**Datepicker with Calendar**
- User interface to select check-in and check-out dates. Clicking on the inputs will show a Calendar component with selectable cells. Built in React.js.
<img src="https://i.imgur.com/lrElkdy.gif" />

## Installation
Requirements:
- Node 12 (Mac: via nvm or asdf-vm)
- PostgreSQL 12 (Mac: via homebrew)

Setup PostgreSQL:
```sh
% brew install postgresql
% brew services start postgresql
```

Populate with mock data:
- Rename config.example.js to config.js and update with your computer username (default username in homebrew postgres): `% id -un`
- Enter the postgres shell: `% psql postgres`
- Create the databases `vacationrentals` and `test` in advance
```sh
postgres=# CREATE DATABASE vacationrentals;
postgres=# CREATE DATABASE test;
```
- Run seeding script: `% npm run seed`

To run:
```sh
% git clone https://github.com/gabsong/reservations-service.git repo
% cd repo
% npm install
% npm run build && npm start
```

## Related Projects
  - https://github.com/light-matter/8bnb-calendar-module
  - https://github.com/light-matter/8bnb-reviews-module
  - https://github.com/light-matter/8bnb-ImageCarousel
