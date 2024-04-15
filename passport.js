const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const GitHubStrategy = require('passport-github2').Strategy;
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;passport.serializeUser((user , done) => {
done(null , user);
})
passport.deserializeUser(function(user, done) {
    done(null, user);
    });
    passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID, // Данные из вашего аккаунта.
    clientSecret: GOOGLE_CLIENT_SECRET, // Данные из вашего аккаунта.
    callbackURL:"http://localhost:3000/auth/google/callback",
    passReqToCallback:true
    },
    function(request, accessToken, refreshToken, profile, done) {return done(null, profile);
    }
    ));
passport.use(new GitHubStrategy({
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/github/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        userProfile=profile;
        return done(null, userProfile);
    }
    ));