module.exports = function(app, passport) {

	// =====================================
	// HOME PAGE  ==========================
	// =====================================
	app.get('/', function(req, res) {
		res.render('index.jade');
	});

	// =====================================
	// LOGIN ===============================
	// =====================================

	app.get('/login', function(req, res) {
		res.render('login.jade', { message: req.flash('loginMessage') });
	});

	app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/profile',
            failureRedirect : '/login',
            failureFlash : true
		}),
        function(req, res) {
            console.log("hello");

            if (req.body.remember) {
              req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
              req.session.cookie.expires = false;
            }
        res.redirect('/');
    });

	// =====================================
	// SIGNUP ==============================
	// =====================================

	app.get('/signup', function(req, res) {
		res.render('signup.jade', { message: req.flash('signupMessage') });
	});


	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/profile',
		failureRedirect : '/signup',
		failureFlash : true
	}));

	// =====================================
	// PROFILE SECTION =====================
	// =====================================

	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.jade', {
			user : req.user
		});
	});

	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
};


function isLoggedIn(req, res, next) {

	// if user connecté
	if (req.isAuthenticated())
		return next();

	// sinon page d'accueil
	res.redirect('/');
}
