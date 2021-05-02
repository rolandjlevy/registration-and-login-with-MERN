const express = require('express');
const router = express.Router();
const User = require('../models/User.js');

// API routes

// Homepage
router.get('/', (req, res) => {
  res.status(200).sendFile('./index.html', { root : __dirname});
});

// Registration page
router.get('/user/registration', (req, res) => {
  res.status(200).sendFile('./registration.html', { root: './public/' });
});

// Registration result
router.post('/user/register', (req, res, next) => {
  // get posted data from form
  const { username, email, password } = req.body;
  const newUser = new User({ username, email, password });
  // saving data into db
  newUser.save((err, document) => {
    if (err) {
      return next(err);
    } else {
      // TODO: successfull registration
      res.status(200).send(`
        <h1>Successful registration</h1>
        <p>Welcome ${document.username}, thank you for registering as a new user</p>
        <p><a href="/">Home</a></p>
      `);
    }
  });
});

// Login page
router.get('/user/login-page', (req, res) => {
  res.status(200).sendFile('./login-page.html', { root: './public/' });
});

// Login result
router.post('/user/login', (req, res, next) => {
  const { username, password } = req.body;
  User.findOne({ username:username })
    .then(user => {
      if (!user) {
        // TODO: display 'Username does not exist' error message
        const error = new Error('Username does not exist. Please try again');
        return next(error);
      } else {
        user.comparePassword(password, function(error, isMatch) {
          if (error) return next(error);
          if (isMatch) {
            // TODO: successfull login
            res.status(200).send(`
              <h1>Successful login</h1>
              <p>${user.username} you are now logged in</p>
              <p><a href="/">Home</a></p>
            `);
          } else {
            // TODO: display 'Wrong password error message
            const error = new Error('Wrong password. Please try again');
            return next(error);
          }
        });
      }
    })
    .catch(err => {
      next(err);
    });
});

// View one user
router.get('/user/:id', (req, res, next) => {
  User.findOne({ _id: req.params.id })
    .then(user => {
      res.status(200).send(`
        <h1>View one user</h1>
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>ID: ${user._id}</p>
        <p><a href="/">Home</a> | <a href="/users">All users</a></p>
    `);
    })
    .catch(err =>  {
      return next(err);
    });
});

// View all users
router.get('/users', (req, res, next) => {
    User.find({  })
    .then(users => {
      let str = '<h1>View all users</h1>';
      users.forEach(user => {
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
router.get('*', (req, res, next) => {
  var url = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.status(404).send(`
    <h1>Error 404!</h1>
    <p>Page not found. Error trying to access ${url}</p>
    <p><a href="/">Home</a></p>
  `);
});

module.exports = router;