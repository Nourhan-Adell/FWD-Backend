import express from 'express';
const app = express();
const port = 7000;

const routes = require('./routes');

app.use((req, res, next) => {
  console.log('Start working..');
  next();
});

app.use(routes);

const server = app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = server;
