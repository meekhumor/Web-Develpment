const express = require('express')
const app = express()

app.get('/cats', (req,res) => {
    res.send("Cat request!!")
})
app.get('/', (req,res) => {
    res.send("This is homepage")
})

app.get('/r/:subreddit', (req,res) => { 
    //In this example, the route /r/:subreddit defines a generic path parameter :subreddit, which captures any value specified in the URL segment after /r/.
    const {subreddit} = req.params // req.params to extract what user has requested in place of subreddit
    res.send(`Browsing ${subreddit} subreddit`)
})

app.get('/r/:subreddit/:postId', (req,res) => { 
    const {subreddit, postId} = req.params 
    res.send(`Veiwing ${postId} while browsing ${subreddit} subreddit`)
})

app.post('/cats', (req,res) =>{
    res.send('Post requested')
})

app.listen(3000, () => { // it tells your app to start listening for visitors on a specific address and port 
    console.log("listening on port 3000")
})
