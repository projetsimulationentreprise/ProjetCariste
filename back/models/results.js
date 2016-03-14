'use strict';
module.exports = function(sequelize, DataTypes) {
  var Results = sequelize.define('Results', {
    id: DataTypes.INTEGER,
    user: DataTypes.INTEGER,
    theme: DataTypes.STRING,
    note: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Results;
};