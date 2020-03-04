import 'dotenv/config';

import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import 'express-async-errors';
import path from 'path';
import Youch from 'youch';

import routes from './routes';
import './database';

class App {
  constructor() {
    this.server = express();

    //Security
    this.server.use(helmet.frameguard())
    this.server.use(helmet.noCache())
    this.server.use(helmet.noSniff())
    this.server.disable('x-powered-by')

    this.middlewares2();
    this.routes();
    this.exceptionHandler();
  }

  middlewares2() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(cors());
    if(routes) {
      this.server.use(routes);
    }
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();
        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal server error' });
    });
  }

  exceptionHandler2() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();
        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal server error' });
    });
  }

  exceptionHandler3() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();
        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

export default new App().server;
