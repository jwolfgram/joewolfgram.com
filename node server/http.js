var BASEURL = '/api',
express = require('express'),
passport = require('passport'),
mongoose = require('mongoose'),
app = express(),
port = '8092',
http = require('http').Server(app),
session = require('express-session'),
bodyParser = require('body-parser'),
db = require('./custom_modules/dbs.js'),
request = require('request'),
cookieParser = require('cookie-parser'),
MongoStore = require('connect-mongo')(session),
cookieSession = require('cookie-session');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/joewolfgramDemo', function(err) {
  if(err) {console.log(err);}
});

require('./custom_modules/passport_auth.js')(passport);

app.use(cookieParser());

// app.use(session({secret: 'anystringoftext',
//          saveUninitialized: true,
//          resave: true,
//          store: new MongoStore({ url: 'mongodb://localhost/joewolfgramDemoSession'}),
//          cookie: { secure: true , httpOnly: false}}));

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use(passport.initialize());
app.use(passport.session());

function isLoggedIn(req, res, next) { //This function is for checking if user logged in through Passport.js (Google / Office365)
  if(req.isAuthenticated()){
    return next();
  }

  res.redirect(BASEURL + '/login');
}

app.get(BASEURL + '/user', function(req, res){
  res.send(JSON.stringify(req.user || false));
});

app.get(BASEURL + '/auth/google',function(req, res, next) {console.log('google/');next()}, passport.authenticate('google', {scope: ['profile', 'email']}));

app.get(BASEURL + '/auth/google/callback',function(req, res, next) {console.log('google/');next()},
  passport.authenticate('google', { successRedirect: '/oauthPage',
                                      failureRedirect: '/oauthPage' })
);

app.get(BASEURL + '/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

http.listen(port, function(){
  console.log('Listening on Port::' + port);
});
