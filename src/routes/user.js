const express = require('express');
const models = require('../../models');
const { jwt, logger } = require('../libs');

const router = express.Router();

router.get('/:id', jwt.isAuthorized, async (req, res, next) => {
    const user = await models.users.findOne({ where: { id: req.params.id } }).catch(logger.error);

    if (user) {
        req.return.data = user;

        next();
    }

    req.return.status = 400;
    req.return.message = 'user_id_invalid';

    next();
});

router.get('/', (req, res, next) => {
    next();
});

router.put('/', (req, res, next) => {
    next();
});

module.exports = router;
