var express = require('express');
var router = express.Router();
var ctrlUsers = require("../controllers/usersController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', ctrlUsers);
});



/* GET sign up page. */
//router.get('/signup', function(req, res, next) {
//  res.render('signup');
//});
//
///* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('session-index', { sessId: 'Express' });
//});

module.exports = router;
