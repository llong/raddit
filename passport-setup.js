// Passport Setup
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var config = require('./config');
var User = require('./models/User');

passport.use(new GoogleStrategy({
    clientID: config.consumerKey,
    clientSecret: config.consumerSecret,
    callbackURL: "/auth/redirect"
  },
  function(accessToken, refreshToken, profile, done) {
    // check if user exists in DB
    User.findOne({googleId:profile.id}).then((currentUser) => {
      if(currentUser){
        // already have the user
        console.log('user is ',currentUser)
      } else {
        // if not create user in db
        new User({
          username: profile.displayName,
          googleId: profile.id
        }).save().then((newUser) => {
          console.log('new user created: ', newUser)
        })
      }
    })
  }
));
