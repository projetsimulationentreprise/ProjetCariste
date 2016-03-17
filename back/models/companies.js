'use strict';
module.exports = function(sequelize, DataTypes) {
  var Companies = sequelize.define('Companies', {
    id: {
      type: DataTypes.INTEGER,
      allowNull : false,
      autoIncrement: true,
      primaryKey : true
    },
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