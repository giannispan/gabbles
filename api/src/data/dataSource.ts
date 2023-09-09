import { DataSource } from 'typeorm';
import { Gab, User } from './entities';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'api',
  password: 'api',
  database: 'gabbles',
  synchronize: true,
  entities: [Gab, User],
});
