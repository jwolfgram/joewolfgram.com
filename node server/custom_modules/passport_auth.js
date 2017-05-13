var passportLocal = require('passport-local').Strategy,
db = require('./dbs.js'),
flash = require('connect-flash'),
GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
LocalStrategy = require('passport-local').Strategy,
googleAuth = {
	'clientID': '371704535120-epmdn8pio92f3fse9o4ufl6p534paoni.apps.googleusercontent.com',
	'clientSecret': 'xSEaBxVou0baVTgixgrwu4NO',
	'callbackURL': '/api/auth/google/callback'
};


module.exports = function(passport) {
	passport.serializeUser(function(user, done){
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done){
		db.User.findById(id, function(err, user){
			done(err, user);
		});
	});

	passport.use('local-signup', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	}, function(req, email, password, done){
		process.nextTick(function(){
			db.User.findOne({'local.username': email}, function(err, user){
				if(err)
					return done(err);
				if(user){
					return done(null, false, req.flash('signupMessage', 'That email already taken'));
				} else {
					var newUser = new db.User();
					newUser.local.username = email;
					newUser.local.password = newUser.generateHash(password);

					newUser.save(function(err){
						if(err)
							throw err;
						return done(null, newUser);
					});
				}
			});
		});
	}));

	passport.use(new LocalStrategy(
	  	function(username, password, done) { //username can be either the username or the users email address, need to check for both
    		db.User.findOne({'local.username': username}, function(err, user){
    			if(err) {
    				throw err;
    			}
    			if(user)
    				return done(null, user);  //Return account found in database
    			else { //Make new account for user based on info obtained from Google User Account data
    				var newUser = new db.User();
    				newUser.google.id = profile.id;
    				newUser.google.token = accessToken;
    				newUser.google.name = profile.displayName;
    				newUser.google.email = profile.emails[0].value;

    				newUser.save(function(err){
    					if(err)
    						throw err;
    					return done(null, newUser);
    				});
    				console.log(profile);
    			}
    		});
	    }
	));

	passport.use(new GoogleStrategy({
	    clientID: googleAuth.clientID,
	    clientSecret: googleAuth.clientSecret,
	    callbackURL: googleAuth.callbackURL},
	  	function(accessToken, refreshToken, profile, done) {
				process.nextTick(function() {
					db.User.findOne({'google.id': profile.id}, function(err, user){
						if (err) {
							console.log('err?');
							throw err;
						}
						if (user) {
							console.log(user);
							return done(null, user);  //Return account found in database
						} else { //Make new account for user based on info obtained from Google User Account data
							var newUser = new db.User();
							newUser.google.id = profile.id;
							newUser.google.token = accessToken;
							newUser.google.name = profile.displayName;
							newUser.google.email = profile.emails[0].value;

							newUser.save(function(err){
								if(err)
								console.log('err?');
									throw err;
								return done(null, newUser);
							});
							console.log(profile);
						}
					});
				})
	    }
	));
};
