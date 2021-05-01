const express = require('express');
const router = express.Router();

const User = require('../models/User.js');

router.get('/', (req, res) => {
    res.send(`
        <h1>Home</h1>
        <p><a href="/api/display">Display data</a></p>
        <form method="post" action="/api/save">
        <p><input name="title" placeholder="Title..." /></p>
        <p><input name="body" placeholder="Body..." /></p>
        <p><button type="submit">Save data</button></p>
    `);
});

router.get('/display', (req, res) => {
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
        str += '<p><a href="/api">Home</a></p>';
        res.send(str);
    })
    .catch(error => {
        console.log('error: ', error);
    });
});

router.post('/save', (req, res) => {
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

module.exports = router;