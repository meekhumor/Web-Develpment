var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Flash message apko allow krte hai ki aap iss route mei bane hue data ko doosre route mein use kr sake
router.get('/age', function(req, res, next) {
  req.flash('age', 12);
  res.send('Age is set to 12');
});
// now i can access flash message(age = 12) in next route

// Checking if we can use flash message in next route
router.get('/checkAge', function(req, res, next) {
  res.send(req.flash('age'));
});

module.exports = router;
