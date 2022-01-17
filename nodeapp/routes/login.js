var express = require('express');
var router = express.Router();
var db = require('../database');
var session = require('express-session');
var bodyParser = require('../node_modules/express/node_modules/body-parser');
var app = express();

app.use(express.json());
app.use(express.urlencoded());
var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(bodyParser.json());

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

router.get('/register', function(req, res, next){
  res.render('register');
});

/* Login Feature */
router.post('/auth',urlencodedParser,function(req, res){
  var Username = req.body.Username.toString();
  var Password = req.body.Password.toString();
  if(Username && Password){
    var sql = "SELECT * FROM USERS WHERE User_Name = ? AND User_Pass = ?";
    db.query(sql, [Username,Password], function(err,results){
      if(err) throw err;
      if(results.length > 0){
        req.session.loggedin = true;
        req.session.username = Username;
        console.log("Logging in " + req.session.username);
        res.redirect('/login');
      }
      else{
        res.send("Incorrect Username or Password!");
			}
    });
  }
  else{
    res.send("Please enter a Username or Password"); //Should not happen
  }
});

module.exports = router;