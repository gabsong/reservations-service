# Reservations Service

<img src="https://i.imgur.com/4aVZ0wi.gif" title="Demo" />

**Datepicker with Calendar**
- User interface to select check-in and check-out dates. Clicking on the inputs will show a Calendar component with selectable cells. Built in React.js.

## Installation
Requirements:
- Node 12 (Mac: via nvm or asdf-vm)
- PostgreSQL 12 (Mac: via homebrew)
  - Rename config.example.js to config.js and update with your psql username
  - Create the databases `vacationrentals` and `test` in advance

To run:
```sh
git clone https://github.com/gabsong/reservations-service.git repo
cd repo
npm install
npm run build && nppm start
```

## Related Projects
  - https://github.com/light-matter/8bnb-calendar-module
  - https://github.com/light-matter/8bnb-reviews-module
  - https://github.com/light-matter/8bnb-ImageCarousel
