const debugLib = require('debug');

const info = debugLib('WhimsMusic-API:info');
const debug = debugLib('WhimsMusic-API:debug');
const error = debugLib('WhimsMusic-API:error');
const server = debugLib('WhimsMusic-API:server');

module.exports = {
    info,
    debug,
    error,
    server,
};
