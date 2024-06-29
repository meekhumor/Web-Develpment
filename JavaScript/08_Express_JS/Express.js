// express is framework for Node.js
// express ka use case => routing
// routing => /about, /users, /products, etc
// routing methods => GET, POST, PUT, DELETE

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});
// req: isme saara data hota hai aane waale user ki request ki taraf ka jaise uski location, device info, etc
// res: isme controls hote hai jinke basis pe hum server se response bhej sakte hai

app.listen(3000)
