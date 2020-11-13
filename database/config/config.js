require('dotenv').config();

const { db } = require('../../src/libs/logger');

module.exports = {
  development: {
    username: 'postgres',
    password: 'postgres',
    database: 'whims_music',
    host: 'localhost',
    dialect: 'postgres',
    logging: db
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PW,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    dialect: 'postgres',
    logging: false
  },
};