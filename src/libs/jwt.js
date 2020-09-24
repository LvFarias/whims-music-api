let jwt = require('jsonwebtoken');

let env = require('../../environments/environment');

function isAuthorized(req, res, next) {
    const token = req.headers['authorization'];
    
    if (!token) {
        return res.status(401).send({ message: 'Failed to authenticate.' });
    }
    
    jwt.verify(token, env.token_secret, function (err, decoded) {
        if (err) {
            return res.status(401).send({ message: 'Failed to authenticate.' });
        }
        
        req['UserInfo'] = decoded;
        
        next();
    });
}

function bashPassword(password) {
    return jwt.sign(password, env.password_secret);
}

function comparePassword(hash, password) {
    return new Promise((res, rej) => {
        jwt.verify(hash, env.password_secret, function (err, decoded) {
            if (decoded == password) res();
            rej();
        });
    });
}

module.exports = {
    isAuthorized,
    bashPassword,
    comparePassword
};
