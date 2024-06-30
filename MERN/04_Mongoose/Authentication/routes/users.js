const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect("mongodb://localhost:27017/caseInsensitive");

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  secret: String
});

userSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model("users", userSchema); // Created a model of user and exported it
