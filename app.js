const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const userRoute = require('./routes/users');
const homeRoute = require('./routes/home');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/users',userRoute);
app.use(homeRoute);

app.listen(port);