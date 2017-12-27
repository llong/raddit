var express = require('express');
var mongoose = require('mongoose');

var LinkSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

let Link = module.exports = mongoose.model('Link', LinkSchema);
