/* eslint-disable no-console */
const app = require('./app.js');

const port = 3015;

app.listen(port, () => console.log(`App in mode: '${process.env.NODE_ENV}' listening on port ${port}!`));
