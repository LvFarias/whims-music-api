const express = require('express');

const { jwt, logger } = require('../libs');
const { userService } = require('../services');

const router = express.Router();

router.get('/:id', jwt.isAuthorized, async (req, res, next) => {
    req.return.data = await userService.getById(req.params.id).catch(logger.error);

    if (!req.return.data) {
        req.return.status = 400;
        req.return.message = 'user_id_invalid';
    }

    next();
});

router.get('/', (req, res, next) => {
    next();
});

router.put('/', (req, res, next) => {
    next();
});

module.exports = router;
