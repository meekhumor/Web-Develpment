// middleware ek aisa function hai jo kisi bhi route se pahle chalta hai

const express = require('express');
const app = express();

// Middleware
app.use((req, res, next) => {
  console.log('Before');
  next();
});
// agar humara middleware chalta gaya to request jam ho jaati hai aur route tk nhi pahuch paati isliye next()


app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000)


