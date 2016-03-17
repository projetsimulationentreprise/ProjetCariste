'use strict';

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
      password: DataTypes.STRING,
      passwordConf : DataTypes.STRING,
      profil:{
          type: DataTypes.ENUM,
          values : ['candidat','recruteur'],
          allowNull : false
      },
      resultat:{
          type: DataTypes.INTEGER,
          allowNull : true
      }

  });
  return Users;
};



