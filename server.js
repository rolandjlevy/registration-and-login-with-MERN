const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const User = require('./models/User.js');

// Routes

app.get('/', (req, res) => {
    res.send(`
        <h1>Home</h1>
        <p><a href="/api/display">Display data</a></p>
        <form method="post" action="/api/save">
        <p><input name="title" placeholder="Title..." /></p>
        <p><input name="body" placeholder="Body..." /></p>
        <p><button type="submit">Save data</button></p>
    `);
});

app.get('/api/display', (req, res) => {
    User.find({  })
    .then(data => {
        let str = '';
        data.forEach(user => {
            str += '<ul>';
            str += `<li>Date: ${user.date}</li>`;
            str += `<li>Title: ${user.title}</li>`;
            str += `<li>Body: ${user.body}</li>`;
            str += '</ul>';
        });
        str += '<p><a href="/">Home</a></p>';
        res.send(str);
    })
    .catch(error => {
        console.log('error: ', error);
    });
});

app.post('/api/save', (req, res) => {
    // saving data into db
    const { title, body } = req.body;
    const data = {
        title,
        body
    };
    // instance of model
    const newUser = new User(data);
    newUser.save((error) => {
        if (error) {
            console.log({error});
        } else {
            res.send(`
                <h1>Saved</h1>
                <p><a href="/api/display">Display data</a></p>
                <p><a href="/">Home</a></p>
            `);
        }
    });
});

module.exports = app;