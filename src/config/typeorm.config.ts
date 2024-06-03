import { mysqlConfig } from './env.config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const typeormConnectionConfig: TypeOrmModuleOptions = {
  ...mysqlConfig,
  type: 'mysql',
  entities: [ 'dist/**/*.entity{.ts,.js}' ],
  synchronize: true,
  timezone: 'utc',
};