var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// auth logout
router.get('/signout', function(req,res,next){
  // passport
  res.send('logout');
})


router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

module.exports = router;
