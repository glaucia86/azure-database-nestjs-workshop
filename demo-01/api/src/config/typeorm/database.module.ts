/**
 * file: src/config/typeorm/database.module.ts 
 * date: 03/14/2023
 * description: file responsible for the database module configuration using TypeORM
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule { }
