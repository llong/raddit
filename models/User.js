var express = require('express');
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: String,
  googleId: String,
  created_at: {
    type: Date,
    default: Date.now
  }
})

let User = module.exports = mongoose.model('User', UserSchema);
