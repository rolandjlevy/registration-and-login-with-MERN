const express = require('express');
const router = express.Router();

const User = require('../models/User.js');

// API routes

// Homepage
router.get('/', (req, res) => {
  res.status(200).sendFile('./index.html', { root : __dirname});
});

// Registration
router.get('/user/register', (req, res) => {
  res.status(200).sendFile('./register.html', { root: './public/' });
});

// Registration result
router.post('/user/register-result', (req, res, next) => {
  // get posted data from form
  const { username, email, password } = req.body;
  const newUser = new User({ username, email, password });
  // saving data into db
  newUser.save((err, document) => {
    if (err) {
      return next(err);
    } else {
      res.status(200).send(`
        <h1>Success!</h1>
        <p>Welcome ${document.username}, thank you for registering as a new user</p>
        <p><a href="/">Home</a></p>
      `);
    }
  });
});

// Login page
router.get('/user/login', (req, res) => {
  res.status(200).sendFile('./login.html', { root: './public/' });
});

// Login result page 
router.post('/user/login-result', (req, res, next) => {
  const { username, password } = req.body;
  User.findOne({ username:username }, function(err, user) {
    if (err) return next(err);
    if (!user) {
      // TODO: display message
      console.log('Username does not exist. Register here...');
      return;
    }
    user.comparePassword(password, function(error, isMatch) {
      if (error) return next(error);
      if (!isMatch) {
        // TODO: display message
        console.log('Wrong password. Please try again');
        return;
      }
    });
    res.status(200).sendFile('./index.html', { root: './public/' });
  });
});

// View one user
router.get('/user/:id', (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  User.findOne({ _id: id }, (err, user) => {
    if (err) {
      return next(err);
    } else {
      res.status(200).send(`
        <h1>View one user</h1>
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>ID: ${user._id}</p>
        <p><a href="/">Home</a></p>
    `);
    }
  });
});

// View all users
router.get('/users', (req, res, next) => {
    User.find({  })
    .then(data => {
      let str = '<h1>View all users</h1>';
      data.forEach(user => {
        str += `
        <ul>
          <li><a href="/user/${user._id}">View user</a></li>
          <li>Username: ${user.username}</li>
          <li>Email: ${user.email}</li>
          <li>ID: ${user._id}</li>
        </ul>`;
      });
      str += '<p><a href="/">Home</a></p>';
      res.status(200).send(str);
    })
    .catch(err => {
      return next(err);
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