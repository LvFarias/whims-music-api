const mysql = require('mysql');

const logger = require('./logger');
const environment = require('../../environments/environment');

function connect() {
    const connection = mysql.createConnection({
        insecureAuth: true,
        host: environment.mysqlHost,
        port: environment.mysqlPort,
        user: environment.mysqlUser,
        password: environment.mysqlPassword,
        database: environment.mysqlDatabase,
    });
    connection.connect();
    return connection;
}

function formatWhere(where = {}) {
    const filters = [];
    for (const key in where) {
        if (where.hasOwnProperty(key)) {
            const value = where[key];
            filters.push(`${key} = '${value}'`);
        }
    }
    return filters.length > 0 ? ` WHERE ${filters.join(' AND ')}` : '';
}

function formatFields(fields, type) {
    switch (type) {
        case 'select':
            return fields.join(', ');
        case 'insert':
            const keys = [];
            const values = [];
            for (const key in fields) {
                if (fields.hasOwnProperty(key)) {
                    const value = fields[key];
                    keys.push(key);
                    values.push(value);
                }
            }
            return `(${keys.join(', ')}) VALUES(${keys.join(', ')})`;
        case 'update':
            const keyValues = [];
            for (const key in where) {
                if (where.hasOwnProperty(key)) {
                    const value = where[key];
                    keyValues.push(`${key}=${value}`);
                }
            }
            return keyValues.length > 0 ? `SET ${keyValues.join(', ')}` : '';
    }
    return fields;
}

async function run(query) {
    return new Promise((res, rej) => {
        const db = connect();
        logger.query(query);
        db.query(query, function (err, result) {
            if (err) rej(err);
            res(result);
        });
    });
}

async function select(table, fields = ['*'], where = {}, limit) {
    return new Promise((res, rej) => {
        const query = `SELECT ${formatFields(fields, 'select')} FROM ${table}${formatWhere(where)};`;
        run(query).then(res).catch(rej);
    });
}

async function insert(table, fields = {}) {
    return new Promise((res, rej) => {
        const query = `INSERT INTO ${table} ${formatFields(fields, 'insert')}`;
        run(query).then(res).catch(rej);
    });
}

async function update(table, fields = {}, where = {}) {
    return new Promise((res, rej) => {
        const query = `UPDATE ${table} ${formatFields(fields, 'update')} ${formatWhere(where)}`;
        run(query).then(res).catch(rej);
    });
}

async function remove(table, where = {}, flag) {
    return new Promise((res, rej) => {
        let query = '';
        if (flag) {
            query = `UPDATE ${table} SET ${flag}=1 ${formatWhere(where)}`;
        } else {
            query = `DELETE FROM ${table} ${formatWhere(where)}`;
        }

        run(query).then(res).catch(rej);
    });
}

module.exports = {
    select,
    insert,
    update,
    delete: remove
}
