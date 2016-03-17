var express = require('express');
var router = express.Router();
var ctrlUsers = require("../controllers/usersController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/espace', function(req, res, next) {
  res.render('espace');
});

router.get('/fiche', function(req, res, next) {
  res.render('fiche');
});

router.get('/acceuilRecruteur', function(req, res, next) {
  res.render('acceuilRecruteur');
});

router.get('/proposition', function(req, res, next) {
  res.render('proposition');
});

router.get('/recherchePostul', function(req, res, next) {
  res.render('recherchePostul');
});

router.get('/reponseRecruteur', function(req, res, next) {
  res.render('reponseRecruteur');
});

router.get('/espaceRecruteur', function(req, res, next) {
  res.render('espaceRecruteur');
});

router.get('/ficheRecruteur', function(req, res, next) {
  res.render('ficheRecruteur');
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
