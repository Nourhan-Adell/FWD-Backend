import express from 'express';
import { Request, Response, NextFunction } from 'express';

const app = express();
const port: number = 7000;

const routes = require('./routes');

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log('Start working..');
  next();
});

app.use(routes);

const server = app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = server;
