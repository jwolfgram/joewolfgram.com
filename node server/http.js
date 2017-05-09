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
request = require('request');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/joewolfgramDemo', function(err) {
  if(err) {console.log(err);}
});

require('./custom_modules/passport_auth.js')(passport);

app.use(session({secret: 'anystringoftext',
         saveUninitialized: true,
         resave: true,
         cookie: { secure: true }}));

app.use(passport.initialize());
app.use(passport.session());

function isLoggedIn(req, res, next) { //This function is for checking if user logged in through Passport.js (Google / Office365)
  if(req.isAuthenticated()){
    return next();
  }

  res.redirect(BASEURL + '/login'); //CHANGE ME!!!!
}

app.get(BASEURL + '/user', function(req, res){
  res.send(JSON.stringify(req.user || false));
});
//
// app.post('/login', bodyParser.json(), function(req, res) {
//     console.log(req.body);
//   },
//   passport.authenticate('local', {
//   successRedirect: '/profile',
//   failureRedirect: '/login',
//   failureFlash: false
// }));
//
// app.post('/signup', bodyParser.json(), function(req, res) {
//   new db.User ({
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//     username: req.body.username,
//     password: req.body.password
//   }).save(function(err) {
//     if (err) {
//       console.log(err);
//       //Incorrect username redirect
//     }else {
//       console.log('User saved successfully!');
//       res.redirect('/profile');
//     }
//   });
// });
//
// app.get('/profile', isLoggedIn, function(req, res){
//     res.send("Logged in!");
// });
//
// app.post('/signup', passport.authenticate('local-signup', {
//   successRedirect: '/',
//   failureRedirect: '/signup',
//   failureFlash: false
// }));

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
