var express = require('express');
var db = require('../database');
var bodyParser = require('../node_modules/express/node_modules/body-parser');
var router = express.Router();
const app = express()

app.use(express.json());
app.use(express.urlencoded());
var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(bodyParser.json());

/* Navigation */
router.get('/login', function(req, res, next) {
    res.render('login');
  });

/* Register Feature */
router.post('/adduser',urlencodedParser,function(req,res,next){

    const Username = req.body.Username.toString();
    const Password = req.body.Password.toString();
    const First_Name = req.body.First_Name.toString();
    const Last_Name = req.body.Last_Name.toString();
    var sql = `INSERT INTO USERS (User_Name,User_Pass,User_Fname,User_Lname) VALUES ('${Username}','${Password}','${First_Name}','${Last_Name}')`;
    db.query(sql,function(err,data){
        if (err) throw err;
            console.log("Account Added to DB!");
    });
    res.redirect('/login');
});

module.exports = router;