const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

// declare static path
let staticPath = path.join(__dirname, "public");

//initializing express.js
const app = express();

//middlewares
app.use('/Public', express.static(staticPath));
app.use(express.json());

//routes
//home route
app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
})

// product route
app.use('/product', (req, res) => {
    res.sendFile(path.join(staticPath, "product.html"))
})

// search route
app.use('/search', (req, res) => {
    res.sendFile(path.join(staticPath, "search.html"))
})

//signup route
app.get('/signup', (req, res) => {
    res.sendFile(path.join(staticPath, "signup.html"))
})

app.post('/signup', (req, res) => {
    console.log(req.body)
    res.json('data received');
})

// 404 route
app.use((req, res) => {
    res.sendFile(path.join(staticPath, "404.html"))
})

app.listen(3000, () => {
    console.log('listening on port 3000......');
})