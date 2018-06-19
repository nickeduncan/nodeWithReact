const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

// clientID 339143140949-qa883l7l6jbktrisqojo7v5fn87eraf6.apps.googleusercontent.com
// clientSecret pheqSN1PQFpjz2x6M2586D2j
passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000
app.listen(PORT);
