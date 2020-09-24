const env = require('./environment');

module.exports = () => {
    return {
        dialect: 'sqlite',
        url: 'sqlite::memory:',
        storage: 'database/whims_music.sqlite',
        username: env.sqliteUser,
        password: env.sqlitePassword,
        database: env.sqliteDatabase,
    };
};