const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const {
  models: { User },
} = require("../db");
require("dotenv").config();

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        //proxy:true used so hosting site returns https, if needed
        callbackURL: "/auth/redirect/google", proxy:true
      },
      async function (accessToken, refreshToken, profile, done) {
        profile = profile._json;
        try {
          const user = await User.findOrCreate({
            where: { email: profile.email },
            defaults: {
              passportId: profile.sub,
              firstName: profile.given_name,
              lastName: profile.family_name,
              email: profile.email,
              role: "CUSTOMER",
            },
          });
          done(null, user);
        } catch (error) {
          console.error(error);
        }
      }
    )
  );

  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        //proxy:true used so hosting site returns https, if needed
        callbackURL: "/auth/redirect/facebook", proxy:true,
        profileFields: [
          "id",
          "displayName",
          "first_name",
          "last_name",
          "email",
        ],
      },
      async function (accessToken, refreshToken, profile, done) {
        profile = profile._json;
        
        //todo FIX: add dummy email address if none in facebook profile
        const emailEval = () => {
          if(profile.email) {
            return profile.email
          } else  return "fixme@facebook.com"
        }

        const email = emailEval();

        try {
          const user = await User.findOrCreate({
            where: { email: email },
            defaults: {
              passportId: profile.id,
              firstName: profile.first_name,
              lastName: profile.last_name,
              email: email,
              role: "CUSTOMER",
            },
          });
          done(null, user);
        } catch (error) {
          console.error(error);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((id, done) => {
    User.findByPk(id, function (err, user) {
      done(err, user);
    });
  });
};
