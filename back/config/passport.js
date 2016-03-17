var LocalStrategy   = require('passport-local').Strategy;


var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
var dbconfig = require('./database');
var connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        connection.query("SELECT * FROM Users WHERE id = ? ",[id], function(err, rows){
            done(err, rows[0]);
        });
    });


    passport.use(
        'local-signup',
        new LocalStrategy({
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true
        },
        function(req, email, password, done) {
            connection.query("SELECT * FROM Users WHERE email = ?",[email], function(err, rows) {
                console.log(req.body.email);
                console.log(req.body);
                var nom = req.body.nom;
                var prenom = req.body.prenom;
                var password = req.body.password;
                var passwordConf = req.body.passwordConf;
                var profil = req.body.profil;
                console.log(profil);
                if(password != passwordConf){
                    return done(null, false, req.flash('signupMessage', "Les mots de passes sont différents."));
                }
                if(!profil){
                    return done(null, false, req.flash('signupMessage', "Veuillez sélectionner votre profil."));
                }
                if (err)
                    return done(err);

                if (rows.length) {
                    return done(null, false, req.flash('signupMessage', "Cet email est déjà utilisé."));
                } else {
                    var newUserMysql = {
                        nom: nom,
                        prenom: prenom,
                        email: email,
                        password: bcrypt.hashSync(password, null, null),
                        profil: profil
                    };

                    var insertQuery = "INSERT INTO Users ( nom, prenom, email, password, profil ) values (?,?,?,?,?)";

                    connection.query(insertQuery,[newUserMysql.nom, newUserMysql.prenom, newUserMysql.email, newUserMysql.password, newUserMysql.profil],function(err, rows) {
                        newUserMysql.id = rows.insertId;

                        return done(null, newUserMysql);
                    });
                }
            });
        })
    );

    passport.use(
        'local-login',
        new LocalStrategy({
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true
        },
        function(req, email, password, done) {
            connection.query("SELECT * FROM Users WHERE email = ?",[email], function(err, rows){
                if (err)
                    return done(err);
                if (!rows.length) {
                    return done(null, false, req.flash('loginMessage', 'Aucun utilisateur trouvé'));
                }


                if (!bcrypt.compareSync(password, rows[0].password))
                    return done(null, false, req.flash('loginMessage', 'Attention ! Mot de passe incorrect.'));
                return done(null, rows[0]);
            });
        })
    );
};
