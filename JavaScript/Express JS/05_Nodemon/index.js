const express = require('express')
const app = express()
// nodemon autorestart the changes made in code, we dont have to call node everytime to restart
app.get('/search', (req,res) => {
    const {q} = req.query
    if(!q){
        res.send('Nothing found!!')
    }
    res.send(`Search query is ${q}`)
})

app.listen(3000, () => { // it tells your app to start listening for visitors on a specific address and port 
    console.log("listening on port 3000")
})













