'use strict';

//var models = require('../models/index');

module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        allowNull : false,
        autoIncrement: true,
        primaryKey : true
    },
      nom: DataTypes.STRING,
      prenom: DataTypes.STRING,
      email: DataTypes.STRING,
      numero: DataTypes.STRING,
      password: DataTypes.STRING,
      resultat:{
          type: DataTypes.INTEGER,
          allowNull : true
      }
  //}, {
  //  classMethods: {
      //associate: function(models) {
      //  Users.hasMany(models.Results, { as : 'fk_resultats' });
      //}
    //}

  });
  return Users;
  //    .sync({force: true}).then(function () {
  //    // Table created
  //    return Users.create({
  //        id: 3,
  //        email: 'John',
  //        nom: 'Hancock'
  //    });
  //});
};



