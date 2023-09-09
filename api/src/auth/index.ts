import Router from '@koa/router';
import { loginHandler } from './authRoutes';

export const authRouter = new Router();
authRouter.post('/login', loginHandler);
