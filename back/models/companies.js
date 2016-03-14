'use strict';
module.exports = function(sequelize, DataTypes) {
  var Companies = sequelize.define('Companies', {
    id: DataTypes.INTEGER,
    nom: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Companies;
};