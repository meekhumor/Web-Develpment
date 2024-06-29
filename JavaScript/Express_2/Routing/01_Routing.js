// for example mera pass bohot saare routes hai jaise
// twitter.com/profile/om
// twitter.com/profile/nikhil
// twitter.com/profile/harsh

// twitter.com/profile/:username (dynamic route)

const express = require('express');
const app = express();

app.get("/:username", (req, res) => {
    res.send(`My username is ${req.params.username}`);
});
// browser se bheja hua kuch bhi tumhe req mein milta hai (req.params)

app.listen(3000)