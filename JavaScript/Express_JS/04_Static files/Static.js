// Static files setup:
// 1. Setup the EJS first
// 2. Create a folder named "public" in the root directory of the project
// 3. Create three folder inside it, images, stylesheets and scripts
// 4. Configure express static: app.use(express.static('./public'))
// 5. Understand the path

// Note: You have to link index.ejs(views) with style.css(stylesheets) and script.js(scripts)

const express = require('express');
const app = express();

app.set('view engine', 'ejs')
app.use(express.static('./public'))

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(3000)