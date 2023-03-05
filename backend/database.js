"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
console.log(process.env.DB_PORT);
const config = {
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
};
module.exports = config;
//# sourceMappingURL=database.js.map