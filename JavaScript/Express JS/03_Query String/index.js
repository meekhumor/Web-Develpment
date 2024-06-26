const express = require('express')
const app = express()

app.get('/search', (req,res) => {
    const {q} = req.query
    if(!q){
        res.send('Nothing found!!')
    }
    res.send(`Search query is ${q}`)
})

app.listen(3000, () => { 
    console.log("listening on port 3000")
})


