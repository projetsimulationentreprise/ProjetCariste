var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var routes = require('./routes/index');
var users = require('./routes/users');
var Users   = require('./models/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.post('/signup/ok', function(req,res){
    var email = req.body.email;
    var pass = req.body.password;
    res.send(email + " : " + pass );
});

//app.get('/setup', function(req, res) {
//
//    // create a sample user
//    var nick = new Users({
//        name: 'Nick Cerminara',
//        prenom: 'password'
//    });
//
//    // save the sample user
//    nick.save(function(err) {
//        if (err) throw err;
//
//        console.log('User saved successfully');
//        res.json({ success: true });
//    });
//});

var Sequelize = require('sequelize')
    , sequelize = new Sequelize('projet', 'goldenrice', 'projetsimulationentreprise', {
      dialect: "mysql", // or 'sqlite', 'postgres', 'mariadb'
      port:    7494, // or 5432 (for postgres)
    });

sequelize
    .sync()
    .then(function(err) {
      console.log('Connection has been established successfully.');
    }, function (err) {
      console.log('Unable to connect to the database:', err);
    });

module.exports = app;
