import { dataSource } from './dataSource';
import { Gab, User } from './entities';

export const gabRepository = dataSource.getRepository(Gab);
export const userRepository = dataSource.getRepository(User);
