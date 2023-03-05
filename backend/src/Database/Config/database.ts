import 'dotenv/config';
import { Options } from 'sequelize';

console.log(process.env.DB_PASS);

const config: Options = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'stop_database',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
}

module.exports = config;
