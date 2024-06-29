const express = require("express");
const app = express();
const path = require("path");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); //doe parsing application/x-www-form-urlencoded. without this we cannot use req.body
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
    const { meat, qty } = req.body;
  res.send(`OK, here are your ${req.body.qty} ${req.body.meat} tacos.`);
  // The req.body property contains key-value pairs of data submitted in the request body. By default, it is undefined and is populated when you use a middleware called body-parsing such as express.urlencoded() or express.json().
});

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
