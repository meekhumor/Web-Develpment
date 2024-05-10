const express = require('express')
const app = express()

app.use((req,res) => {  // it gets trigger whenever user passes a request
    console.log("We got a new request")
    console.dir(req)
    res.send({color: 'red'})
})

app.listen(3000, () => { // it tells your app to start listening for visitors on a specific address and port 
    console.log("listening on port 3000")
})
