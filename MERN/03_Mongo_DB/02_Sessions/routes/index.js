var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  req.session.ban = true;
  // it creates a session wrt your browser(user) where ban is set to true in a server (only your laptop)
  res.render("index", {title: "Session & Cookies"});
});

// check if the user is banned or not
router.get("/checkBan", function (req, res, next) {
  if(req.session.ban) {
    res.send("You are banned");
  } else {
    res.send("You are not banned");
  }
});

// delete the session
router.get("/deleteSession", function (req, res, next) {
  req.session.destroy();
  res.send("Session deleted");
});

module.exports = router;
