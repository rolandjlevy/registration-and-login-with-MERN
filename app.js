const express = require('express');
const app = express();
require('dotenv').config();

const { ROUTES } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

let routes = require('./routes/api-dev.js');
if (ROUTES === 'server') {
    routes = require('./routes/api-server.js');
}
app.use('/', routes);

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'unknown';
    if (ROUTES === 'server') {
        return res.status(status).send(`
            <h1>Error ⚠️</h1>
            <p>${message}</p>
            <p><a href="/">⬅ Home</a></p>
        `);
    }
    return res.status(status).json({
        "message": message
    });
});

module.exports = app;