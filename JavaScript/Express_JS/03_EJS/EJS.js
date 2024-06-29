// EJS is template engine jisme calculation ho skti hai (dynamic html)

// EJS Setup 
// 1. EJS installation: npm install ejs
// 2. Configure EJS: app.set('view engine', 'ejs')
// 3. Create a folder named "views" in the root directory of the project
// 4. Make ejs files in views folder
// 5. Use render instead of send

const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render("index", {number: 4});
});
// we can also pass an object through render method to ejs file

app.listen(3000)