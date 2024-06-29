var express = require('express');
var router = express.Router();

// Create cookie
router.get('/', function(req, res, next) {
  res.cookie("age", 25) // cookie (age = 25) is set in webpage where the client can read it
  res.render('index', { title: 'Express' });
});

// Read cookie
router.get('/read', function(req, res, next) {
  console.log(req.cookies); // { age: '25' }
  res.send('Cookie read, see terminal');
});

// Delete cookie
router.get('/delete', function(req, res, next) {
  res.clearCookie('age'); // cookie (age = 25) is deleted in webpage where the client can read it
  res.send('Cookie deleted, see terminal');
});

module.exports = router;
