require('dotenv').config();

const { db } = require('../../src/libs/logger');

module.exports = {
  development: {
    username: 'postgres',
    password: 'postgres',
    database: 'whims_music',
    host: 'localhost',
    dialect: 'postgres',
    logging: false
  },
  production: {
    username: 'postgres',
    password: 'postgres',
    database: 'whims_music',
    host: 'localhost',
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
};