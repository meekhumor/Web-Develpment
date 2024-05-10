const express = require('express')
const app = express()
const path = require('path')

// Html
app.set('view engine', 'ejs') //This line configures Express.js to use EJS (Embedded JavaScript) as the view engine
// In Express.js, res.set() is a method used to set HTTP response headers
app.set('views', path.join(__dirname, '/views'))
// Now you can access ejs files in views folder from any directory 

app.get('/', (req,res) =>{
    res.render('home') 
    /*In Express.js, res.render() is a method used to render and send HTML files to the client. It is typically used with template engines 
    like EJS, Handlebars, Pug, etc., to dynamically generate HTML content on the server side and send it to the client's browser. 
    res.render always search for a directory named "views" for the ejs(basically html) file*/
})

// Public
app.use(express.static(path.join(__dirname,'public'))) // directory which may contain images, JS, CSS all over requred files


app.get('/random', (req,res) =>{ // passing data to template
    const num = Math.floor(Math.random()*10) +1
    res.render('conditionals', {num})
})

app.get('/r/:subreddit', (req,res) =>{
    const {subreddit} = req.params;
    res.render('subreddit', {subreddit})
})

app.get('/cats', (req,res) =>{
    const cats = ['Blue','Rocket', 'Monty', 'Stephanie']
    res.render('loops', {cats})
})

app.listen(3000, ()=>{
    console.log("Listening on port 3000")
})

