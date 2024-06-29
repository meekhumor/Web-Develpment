const express = require("express")
const app = express()
const port = 3000

app.set("view engine", "ejs") // we can set view engine to ejs so that we can have access our html file
app.use(logger) // we can use middleware to log the request

// Rendering HTML
app.get("/", (req, res) => {  // "file path", (request,response)
//   res.send("Hello World!") // we can send message to server
  res.render("index", {text: "World"}) // we can send html file to server and anything with it to ejs
  // html file should be always kept in views folder (rename it to ejs)
})

// Router
const userRouter = require("./routes/users")
app.use("/users", userRouter) // it will direct to userRouter if file path contains "/users"

// Middleware
function logger(req, res, next) {
    console.log("Request URL:", req.url)
    next()  // it just tells to move forward just like continue in c++
}

app.listen(3000)