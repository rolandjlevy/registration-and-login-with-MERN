const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const routes = require('./routes/api.js');
app.use('/api', routes);

module.exports = app;