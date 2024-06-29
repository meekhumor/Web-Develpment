const express = require("express");
const router = express.Router();

// Every path starting with 'users' will be here

router.get("/", (req, res) => {
  res.send("Users List");
});

router.get("/new", (req, res) => {
  res.send("New User");
});

router.post("/", (req, res) => {
  res.send("User Created");
});

// Get
// router.get("/:id", (req, res) => {
//     res.send(`Get user with ID ${req.params.id}`) // req.params.id stores id number
// })

// Put
// router.put("/:id", (req, res) => {
//     res.send(`Update with ID ${req.params.id}`) // req.params.id stores id number
// })

// Delete
// router.delete("/:id", (req, res) => {
//     res.send(`Delete with ID ${req.params.id}`) // req.params.id stores id number
// })

// Easier way to do that

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Get user with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete with ID ${req.params.id}`);
  });



module.exports = router;
