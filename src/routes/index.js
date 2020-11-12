const express = require('express');

const models = require('../../database/models');
const { jwt, logger, email } = require('../libs');

const router = express.Router();

router.get('/', async (req, res, next) => {
  next();
});

router.post('/forgot-password', async (req, res, next) => {
  req.return.status = 400;

  const user = await models.Users.findOne({ where: { email: req.body.email } }).catch(logger.error);
  
  if (user) {
    const token = user.password;

    const result = await email.forgotPassword(user.email, user.name, token).catch(logger.error);
    
    if (result) {
      req.return.status = 200;
    }
  }

  next();
});

router.get('/reset-password', async (req, res, next) => {
  const user = await models.Users.findOne({ where: { email: req.params.email } }).catch(logger.error);
  
  if (user) {
    const passwordMath = await jwt.comparePassword(user.password, req.params.token).catch(logger.error);
    
    if (passwordMath) {
      req.return.data = {
        id: user.id,
        name: user.name,
        email: user.email,
        token: user.password,
      }
    }
  } else {
    req.return.status = 400;
    req.return.message = 'user_or_password_invalid';
  }

  next();
});

router.post('/reset-password', async (req, res, next) => {
  if (!req.body.password && !req.body.cPassword) {
    req.return.error = 400;
    req.return.message = 'invalid_params';
    
    next();
  }

  const user = await models.Users.findOne({ where: { email: req.body.email } }).catch(logger.error);
  
  if (user) {
    const passwordMath = await jwt.comparePassword(user.password, req.body.token).catch(logger.error);
    
    if (passwordMath) {
      const update = await models.Users.update({ password: req.body.password }, { where: { id: req.body.id } }).catch(logger.error);
      
      if (update[0] > 0) next();
    }
  }

  req.return.error = 400;
  req.return.message = 'error_on_reset_password';
  
  next();
});

router.post('/login', async (req, res, next) => {
  const user = await models.Users.findOne({ where: { email: req.body.email } }).catch(logger.error);
  
  if (user) {
    const passwordMath = await jwt.comparePassword(user.password, req.body.password).catch((e) => { logger.error('error2', e)});
    
    if (passwordMath) {
      user.dataValues.token = jwt.createUserToken(user.id);
      
      req.return.data = user;
      
      next();
    }
  }

  req.return.status = 400;
  req.return.message = 'user_or_password_invalid';
  
  next();
});

router.delete('/logout', async (req, res, next) => {
  next();
});

module.exports = router;
