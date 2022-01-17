var express = require('express');
var session = require('express-session');
var router = express.Router();

router.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

/* Navigation */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/checkbook', function(req, res, next) {
  res.render('checkbook');
});

router.get('/login', function(req, res, next) {
  res.render('login',{Username: req.session.username});
});

module.exports = router;