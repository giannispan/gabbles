import Router from '@koa/router';
import { requireAuthenticatedUser } from '../middlewares/authMiddleware';
import { saveGab, getGabs } from './gabRoutes';

export const gabsRouter = new Router();
gabsRouter.use(requireAuthenticatedUser);
gabsRouter.post('/gabs', saveGab);
gabsRouter.get('/gabs', getGabs);
