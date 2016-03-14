'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    id: DataTypes.INTEGER,
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Choice.hasMany(models.Results, { as : 'resultats' });
      }
    }
  });
  return Users;
};

