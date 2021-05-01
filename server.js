const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

const routes = require('./routes/api.js');
app.use('/', routes);


module.exports = app;