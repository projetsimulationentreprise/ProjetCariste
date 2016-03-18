/**
 * Created by Janany on 17/03/2016.
 */

var express = require('express');
var router = express.Router();

//app.get('/' , isLoggedIn, function(req, res) {
//    //res.render('index', {
//    //    user : req.user
//    //});
//    res.render('index');
//    console.log(req.user);
//});
//
//router.post('/', isLoggedIn, function(req, res) {
//    res.render('index', {
//        user : req.user
//    });
//});

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


router.get('/test', function(req, res) {
    res.render('test', {
        user : req.body.user
    });
});

module.exports = router;

function isLoggedIn(req, res, next) {

    // if user connecté
    if (req.isAuthenticated())
        return next();

    // sinon page d'accueil
    res.redirect('/');
}
