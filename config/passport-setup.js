const passport = require('passport');
const keys = require('./keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user-model');

passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
})

passport.use(new GoogleStrategy({
  clientID: keys.google.clientID,
  clientSecret: keys.google.clientSecret,
  callbackURL: "/auth/google/redirect"
}, (accessToken, refreshToken, profile, done) => {
  //Check if user already exists
  User.findOne({
    providerId: profile.id
  }).then((currentUser) => {
    if (currentUser) {
      //User exists
      console.log('User Exists: ' + currentUser);
      done(null ,currentUser);
    } else {
      //User doesn't exist, create new
      if(profile.emails[0].value == keys.admin.email){
        createUser(profile, done);
        console.log('New user created: ' + currentUser);
      }else{
        console.log('User is not approved!');
        done(null, currentUser);
      }
      
    }
  })
}))

function createUser(profile, done) {
  var fullUrl = profile._json.image.url;
  var provider = profile.provider;
  new User({
    username: profile._json.name.givenName + profile._json.name.familyName,
    firstName: profile._json.name.givenName,
    lastName: profile._json.name.familyName,
    email: profile.emails[0].value,
    avatarUrl: fullUrl.substring(0, fullUrl.length - 6),
    provider: provider.charAt(0).toUpperCase() + provider.slice(1),
    providerId: profile.id,
  }).save().then((newUser) => {
    done(null, newUser);
  })
}