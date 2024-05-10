const express = require("express");
const app = express();
const path = require("path");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); //doe parsing application/x-www-form-urlencoded. without this we cannot use req.body
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const comments = [
  {
    username: "Todd",
    comment: "lol that is funny!",
  },
  {
    username: "Skyler",
    comment: "I like to go birdwatching with my dog",
  },
  {
    username: "Sk8erBoi",
    comment: "Plz delete your account",
  },
  {
    username: "onlysayswoof",
    comment: "woof woof woof",
  },
];

//---------------------------------------------READ----------------------------------------------------
app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/news");
});

//---------------------------------------------CREATE----------------------------------------------------

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  console.log(username);
  res.redirect("/comments");
  // it redirects to particular url with the listed param
});
// first post runs which serves the form then get runs with same params


app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
