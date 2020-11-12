const express = require('express');
const Sequelize = require('sequelize');

const { jwt, logger } = require('../libs');
const models = require('../../database/models');

const router = express.Router();

router.get('/:id', jwt.isAuthorized, async (req, res, next) => {
    const user = await models.Users.findOne({
        where: { id: req.params.id },
        include: [
            models.Artists,
            models.Albums,
            { model: models.Musics, as: 'MusicsLiked' },
            { model: models.Musics, as: 'MusicsViewed' }
        ]
    }).catch(logger.error);

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
