var express = require('express');
var router = express.Router();
const logger = require('../../../config/logger');
const { mongo, env } = require('../../../config/vars');
var User = require('../../models/user.model');

/* GET users listing. */
router.get('/', async function(req, res, next) {

  let users = await User.find();
  logger.info('list user ' + users.length);

  res.send(users);
  
});

router.get('/create', async function(req, res, next) {

  const d = new Date();
  let time = d.getMilliseconds();

  let user = new User({
    name: 'admin',
    password: time,
  });

  await user.save();

  res.send({
    messge: 'save a new user !!!!!'
  });
  
});

module.exports = router;
