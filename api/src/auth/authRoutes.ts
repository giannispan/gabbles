import Router from '@koa/router';
import { login } from './authController';

interface LoginRequest {
  username: string;
}

export const loginHandler = async (ctx: Router.RouterContext) => {
  const request = ctx.request.body as LoginRequest;

  const user = await login(request.username);

  ctx.status = 200;
  ctx.body = {
    token: btoa(user.id),
  };
};
