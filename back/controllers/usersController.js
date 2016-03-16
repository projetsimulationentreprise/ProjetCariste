/**
 * Created by Janany on 16/03/2016.
 */

var models = require("../models");


var test = {
    email: 'janany',
    password: 'lol'
};

models.Users.create(test).then(function (user) {
    console.log(user);
});