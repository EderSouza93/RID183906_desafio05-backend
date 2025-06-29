import 'express-async-errors';
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate';

import routes from './routes';
import ErrorHandleMiddleware from '@shared/errors/ErrorHandleMiddleware';
import { AppDataSource } from '../typeorm/data-source';

const startServer = async () => {
  await AppDataSource.initialize();

  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use(routes);
  app.use(errors())
  app.use(ErrorHandleMiddleware.handleError);

  console.log('Connected to the database! 🎉');
  return app;
}

export default startServer()
  .then(app => {
    return app.listen(3000, () => {
      console.log('Server started on port 3000! 🏆')
    });
  })
  .catch(error => {
    console.log('Failed to connect to the server:', error);
  })

