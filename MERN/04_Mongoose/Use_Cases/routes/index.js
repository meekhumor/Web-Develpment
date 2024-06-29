var express = require('express');
var router = express.Router();

const userModel = require('./users');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// creating user model
router.get('/create', async function(req, res, next) {
  let userdata = await userModel.create({
    username: "Harshita",
    password: "passwordoops",
    nickname: "Nomiii",
    description: "I am a girl aged 21 and i love JS",
    categories:  ['js','HTML', 'Css', 'react'],
  });
  res.send(userdata)
});

// ----------------------------------------------------------------------------------------------

// case-insensitve search 
router.get('/find', async function(req, res, next) {
  var regex = new RegExp('^Harshi$', 'i'); // this will allow case-insensitve search
  let user = await userModel.find({username: regex});
  res.send(user)
});
// '^' and '$' are used to match the beginning and end of the string exactly

// ----------------------------------------------------------------------------------------------

// Document where an array field contains all of set of values
router.get('/findCss', async function(req, res, next) {
  let user = await userModel.find({categories: {$all: ['Css']}});
  res.send(user)
});

// ----------------------------------------------------------------------------------------------

// Document with specific data range
router.get('/findDate', async function(req, res, next) {
  var date1 = new Date('2024-06-29');
  var date2 = new Date('2024-06-30');

  let user = await userModel.find({datecreated: {$gte: date1, $lte: date2}});
  // gte: greater equal | lte: lesser equal
  res.send(user)
});

// ----------------------------------------------------------------------------------------------

//Filter documents based on existence of a field
router.get('/filter', async function(req, res, next) {
  let user = await userModel.find({categories: {$exists: true}});
  res.send(user)
});

module.exports = router;
