var express = require('express');
var router = express.Router();
const userModel = require('./users');
const passport = require('passport');
const localStatergy = require("passport-local");
const users = require('./users');

passport.use(new localStatergy(userModel.authenticate()));

router.get('/', function(req,res){
    res.render('index',{title: 'Authentication'});
});

// Profile route
router.get('/profile', isLoggedIn, function(req,res){
    res.render("profile");
});

// ------------------------------------------------------------------------------

// Register route
router.post('/register', function(req,res){
    var userdata = new userModel({
        username: req.body.username,
        secret: req.body.secret
    });
    
    userModel.register(userdata, req.body.password)
        .then(function(registereduser){
            passport.authenticate('local')(req, res, function(){
                res.redirect('/profile')
        });
    })   
});

// ------------------------------------------------------------------------------

// Login route
router.post('/login', passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/'
}), function(req,res){});

// ------------------------------------------------------------------------------

// Logout route
router.get('/logout', function(req,res,next){
  req.logout(function(err){
      if(err) {return next(err);}
      res.redirect('/');
  });
});

// ------------------------------------------------------------------------------

// Is Logged In Function
function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
      return next();
  }
  res.redirect('/');
}

module.exports = router;
