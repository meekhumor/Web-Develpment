# Use Cases

- Install mongoose: `npm i mongoose`
- Setup a model in users.js (look at process.md of Mongo_DB folder)

# Authentication

- Install and require: `npm i passport passport-local passport-local-mongoose mongoose express-session`
- Write app.js code first in between 'view engine' and 'logger'
    ```
    app.use(expressSession({
        resave: false,
        saveUninitialized: false,
        secret: 'keyboard cat'
    }))
    app.use(passport.initialize());
    app.use(passport.session());
    passport.serializeUser(usersRouter.serializeUser());
    passport.deserializeUser(usersRouter.deserializeUser());

    ```
- Setup users.js properly
    ```
    const mongoose = require('mongoose');
    const passportLocalMongoose = require("passport-local-mongoose")

    mongoose.connect('mongodb://localhost:27017/dbName');

    const userSchema = mongoose.Schema({
        username: String,
        password: String,
        secret: String
    });

    
    userSchema.plugin(passportLocalMongoose)
    module.exports = mongoose.model('User', userSchema);

    ```
-  Write code in index.js 

    1. Registrering User

    ```
    const userModel = require('./user');
    const passport = require('passport');
    const localStatergy = require("passport-local");

    passport.use(new localStatergy(userModel.authenticate()));

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

    ```
    2. Login User

    ```
    router.post('/login', passport.authenticate('local', {
        successRedirect: '/profile',
        failureRedirect: '/'
    }), function(req,res){});

    ```
    3. Logout User

    ```
    router.get('/logout', function(req,res,next){
        req.logout(function(err){
            if(err) {return next(err);}
            res.redirect('/');
        });
    });

    ```
    4. IsLoggedIn Middleware

    ```
    function isLoggedIn(req,res,next){
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect('/');
    }

    ```
   