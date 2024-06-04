const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();

app.use(bodyParser.json()); // not url parser

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // allow access from anythere, to avoid CORS Errors
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE'); // allow which methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
app.use('/feed', feedRoutes)

app.listen(8080);