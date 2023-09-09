import { Middleware } from 'koa';
import { userRepository } from '../data';

export interface AuthState {
  userId: string;
}

export const requireAuthenticatedUser: Middleware<AuthState> = async (ctx, next) => {
  const [type, token] = ctx.header.authorization?.split(' ', 2) ?? [null, null];
  if (type === 'bearer') {
    ctx.state.userId = atob(token);
    const userExists = await userRepository.exist({
      where: { id: ctx.state.userId },
    });
    if (userExists) {
      await next();
      return;
    }
  }
  return (ctx.status = 401);
};
