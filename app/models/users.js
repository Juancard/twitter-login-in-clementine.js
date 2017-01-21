'use strict';

// Encriptar contraseña
var bcrypt   = require('bcrypt-nodejs');
var mongoose = require("mongoose");
var Schema = mongoose.Schema

var User = new Schema({
  local: {
    username: String,
    email: String,
    password: String
  },
  facebook: {
    id: String,
    token: String,
    displayName: String,
    username: String
  },
  github: {
      id: String,
      token: String,
      displayName: String,
      username: String,
      publicRepos: Number
  },
  twitter: {
      id: String,
      token: String,
      displayName: String,
      username: String,
  },
 nbrClicks: {
    clicks: Number
 }
});

// methods ======================
// generating a hash
User.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', User);
