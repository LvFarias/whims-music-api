const env = require('./environment');

module.exports = () => {
    return {
        username: env.mysqlUser,
        password: env.mysqlPassword,
        database: env.mysqlDatabase,
        host: env.mysqlHost,
        port: env.mysqlPort,
        dialect: 'mysql',
        logging: true
    };
};