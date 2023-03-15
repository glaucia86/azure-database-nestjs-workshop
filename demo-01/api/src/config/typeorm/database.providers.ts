/**
 * file: src/config/typeorm/database.providers.ts
 * date: 03/14/2023
 * description: file responsible for the database connection configuration using TypeORM
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mssql',
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        options: {
          encrypt: true,
          enableArithAbort: true,
        },
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        /*entities: [
          __dirname + '../../../src/employee/employee.entity{.ts,.js}',
        ],*/
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
