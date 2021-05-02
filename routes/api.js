const express = require('express');
const path = require('path');
const router = express.Router();

const bcrypt = require('bcrypt');
const rounds = 10;

const User = require('../models/User.js');

// API routes

// Homepage
router.get('/', (req, res) => {
  res.sendFile('./index.html', { root : __dirname});
});

// Registration
router.get('/user/register', (req, res) => {
  res.sendFile('./register.html', { root: './public/' });
});

// Registration result
router.post('/user/register-result', (req, res) => {
  // get posted data from form
  const { username, email, password, confirmedpassword } = req.body;
  // instance of model
  bcrypt.hash(password, rounds, async (err, hash) => {
    if (err) {
      console.log({error});
      res.sendFile('./error.html', { root: './public/' });
      return;
    }
    const newUser = await new User({ username, email, password:hash });
    // saving data into db
    newUser.save(error => {
      if (error) {
        console.log({error});
      } else {
        res.send(`
          <h1>Success!</h1>
          <p>You have now registered as a new user</p>
          <p><a href="/">Home</a></p>
        `);
      }
    });
  });
});

// Login page
router.get('/user/login', (req, res) => {
  res.sendFile('./login.html', { root: './public/' });
});

// Login result page 
router.post('/user/login-result', (req, res) => {
  const { username, email, password } = req.body;
  const query  = User.where({ username:username });
  query.findOne((err, user) => {
    if (err) return handleError(err);
    if (user) {
      console.log({user})
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          console.log({error});
          return;
        }
        console.log({result});
      })
    }
  });
  res.sendFile('./index.html', { root: './public/' });
});

// View all users
router.get('/users', (req, res) => {
    User.find({  })
    .then(data => {
      let str = '<h1>View all users</h1>';
      data.forEach(user => {
        str += `
        <ul>
          <li>Username: ${user.username}</li>
          <li>Email: ${user.email}</li>
        </ul>
        `
      });
      str += '<p><a href="/">Home</a></p>';
      res.send(str);
    })
    .catch(error => {
      console.log('error: ', error);
    });
});

// Page not found
router.get('*', (req, res) => {
  res.status(404).send(`
    <h1>Error 404!</h1>
    <p>Page not found</p>
    <p><a href="/">Home</a></p>
  `);
});


module.exports = router;