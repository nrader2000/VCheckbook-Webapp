var express = require('express');
var router = express.Router();
var db = require('../database');

/* Navigation */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/checkbook', function(req, res, next) {
  res.render('checkbook');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

module.exports = router;