const express = require("express");
const app = express();

app.set('view engine', 'ejs')

app.get("/error", (req, res,next) => {
  throw Error("Something went wrong");
});

// In express error handling documentation you will find this function and write it in app.use()
app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err }); // make a error.ejs page in views folder
});

app.listen(3000);
