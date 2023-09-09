import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import Router from '@koa/router';

import { authRouter } from './auth';
import { gabsRouter } from './gab';

import { dataSource } from './data';

const router = new Router();

const run = async () => {
  await dataSource.initialize();

  router.use(authRouter.routes(), authRouter.allowedMethods());
  router.use(gabsRouter.routes(), authRouter.allowedMethods());

  const app = new Koa();
  app.use(bodyParser());
  app.use(cors());
  app.use(router.routes());
  app.use(router.allowedMethods());

  app.listen(9000);
  console.log('API listening on port 9000');
};

run();
