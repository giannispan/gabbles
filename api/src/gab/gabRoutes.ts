import Router from '@koa/router';
import { AuthState } from '../middlewares/authMiddleware';
import { createGab, fetchGabs } from './gabController';
import { Gab } from '../data';

export const saveGab = async (ctx: Router.RouterContext<AuthState>) => {
  const gab = ctx.request.body as Gab;
  gab.authorId = ctx.state.userId;

  try {
    const savedGab = await createGab(gab);

    ctx.status = 201;
    ctx.body = savedGab;
  } catch (error) {
    console.log(error);

    ctx.status = 500;
    ctx.body = {
      error: 'Failed to save gab',
    };
  }
};

export const getGabs = async (ctx: Router.RouterContext<AuthState>) => {
  const searchTerm = ctx.request.query.search as string;

  try {
    const gabs = await fetchGabs(searchTerm);

    ctx.status = 200;
    ctx.body = gabs;
  } catch (error) {
    console.log(error);
    ctx.status = 500;
    ctx.body = {
      error: 'Failed to search gabs',
    };
  }
};
