var express = require('express');
var router = express.Router();
const userModel = require('./users'); // Importing the architecture of model from users folder

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Create a model
router.get('/create', async function(req, res, next) {
  const userCreated = await userModel.create({
    username: 'om',
    email: 'om170904@gmail.com',
    password: '0000'
  });
  res.send(userCreated);
});
// userModel.create() is asynchronous jisse badme ka code pehle chal jayega isliye async function ka use krke await lagaya 


// Find a model
router.get('/find', async function(req, res, next) {
  const allUser = await userModel.find();
  res.send(allUser);
});
// userModel.findOne({username: 'om'}), it will store all the data of the user with username om


// Update a model
router.get('/update', async function(req, res, next) {
  const userUpdated = await userModel.update({
    username: 'harsh',
    email: 'om170904@gmail.com',
    password: '<PASSWORD>'
  });
  res.send(userUpdated);
});


// Delete a model
router.get('/delete', async function(req, res, next) {
  const userDeleted = await userModel.findOneAndDelete(
    {
      username: 'harsh'
    }
  );
  res.send(userDeleted);
});

module.exports = router;
