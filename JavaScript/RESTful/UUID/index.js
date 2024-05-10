const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); //doe parsing application/x-www-form-urlencoded. without this we cannot use req.body
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const comments = [
  {
    id: uuid(),
    username: "Todd",
    comment: "lol that is funny!",
  },
  {
    id: uuid(),
    username: "Skyler",
    comment: "I like to go birdwatching with my dog",
  },
  {
    id: uuid(),
    username: "Sk8erBoi",
    comment: "Plz delete your account",
  },
  {
    id: uuid(),
    username: "onlysayswoof",
    comment: "woof woof woof",
  },
];

//---------------------------------------------READ----------------------------------------------------
app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

//-----------------------------------------READ with ID--------------------------------------------------------------------------------------

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/shows", { comment });
});

//---------------------------------------------CREATE-----------------------------------------------------------

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect("/comments"); // redirects the page comments
});
//-----------------------------------------CREATE with ID--------------------------------------------------------------------------------------

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/shows", { comment });
});

//-------------------------------------------Update by ID----------------------------------------------------

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundcomment = comments.find(function (c) {
    c.id === parseInt(id);
  });
  foundcomment.comment = newCommentText;
  res.redirect("/comments");
});

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
