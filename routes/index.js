var express = require('express');
var router = express.Router();
var Link = require('../models/links');
var moment = require('moment');
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  Link.find({}, function(err,links){
    if(err){
      console.log(err)
    } else {
      res.render('index', {title: 'home', links:links})
    }
  })
});

router.get('/signin', function(req, res, next) {
  res.render('signin', { title: 'sign in' });
});

router.get('/links/new', function(req, res, next) {
  res.render('newlink', { title: 'new link' });
});

router.get('/links/:id', function(req, res, next) {
  Link.findById(req.params.id, function(err,link){
      if(err){
        console.log(err)
      } else {
          console.log(link)
          res.render('singlelink', { title: 'new link', link: link });
      }
  })

});

router.post('/links/new', function(req,res,next){
  let link = new Link();
  link.title = req.body.title;
  link.url = req.body.url;
  link.save(function(err){
    if(err) {
      console.log(err)
    } else {
      res.redirect('/')
    }
  })

})

router.get('/account/edit', function(req, res, next) {
  res.render('edituser', { title: 'account' });
});

router.get('/auth/redirect', passport.authenticate('google'),function(req, res, next) {
  res.send('yo yo yo');
});



module.exports = router;
