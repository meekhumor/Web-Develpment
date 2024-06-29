const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/caseInsensitive");

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  nickname: String,
  description: String,
  categories:  {
    type: Array,
    default: []
  },
  datecreated: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("users", userSchema); // Created a model of user and exported it
