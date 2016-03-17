/**
 * Created by Janany on 16/03/2016.
 */

var models = require("../models");


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

    }

};

module.exports = users;
