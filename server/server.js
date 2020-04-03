/* eslint-disable no-console */
const app = require('./app.js');

let port = 80;
if (process.env.NODE_ENV === 'development') {
  port = 3000;
}

app.listen(port, () => console.log(`App in mode: '${process.env.NODE_ENV}' listening on port ${port}!`));
