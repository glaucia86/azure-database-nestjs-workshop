/**
 * file: src/employee/employee.providers.ts
 * date: 03/14/2023
 * description: file responsible for the 'Employee' module configuration using TypeORM
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { DataSource } from "typeorm";
import { Employee } from "./entities/employee.entity";

export const employeeProviders = [
  {
    provide: 'EMPLOYEE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Employee),
    inject: ['DATA_SOURCE'],
  },
];