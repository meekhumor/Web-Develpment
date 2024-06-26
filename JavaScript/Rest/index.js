const express = require("express");
const app = express();

const users = require("./MOCK_DATA.json");

//-------------------Read-------------------------
app.get("/users", (req, res) => {
  return res.json(users);
});

// ----------------Read with Id-------------------
app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  // we will find the user with the id that we send in the url
  const user = users.find((user) => user.id === id);

  return res.json(user);
});

//-------------------Create-------------------------
app.post("/users", (req, res) => {
  const { name, email, password } = req.body;
});

//--------------------Patch--------------------------
app.patch("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name, email, password } = req.body;
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
