/**
 * Created by Janany on 16/03/2016.
 */

var models = require("../models");
var express = require('express');
var router = express.Router();

var test = {
    email: 'janany',
    password: 'lol',
    profil: 'candidat'
};

models.Users.create(test).then(function (user) {
    console.log(user);
});

var users = {
    create : function(req,res){

    },

    findCandidatsWithResults : function(req,res){
        models.Users.findAll(
            { where: {
                resultat: {
                    $ne: null
                },
                profil: 'candidat'
            }
            },function(res,req) {
                res.redirect('http://localhost:3000/candidat');
                console.log(res);
            }
        );
    }
};

router.get('/candidats', users.findCandidatsWithResults)



module.exports = users;