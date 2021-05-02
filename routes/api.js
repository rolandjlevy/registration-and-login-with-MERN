const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../models/User.js');

// API routes

// Homepage
router.get('/', (req, res) => {
  res.status(200).sendFile('./index.html', { root : __dirname});
});

// express-validator: validation / sanitization settings for user input
// status code 422: Unprocessable Entity

const registerValidation = [
  check('username').not().isEmpty().trim().escape().isLength({ min:6, max:12 }),
  check('email').not().isEmpty().trim().isEmail().isLength({ max:128 }),
  check('password').not().isEmpty().trim().escape().isLength({ min:6, max:12 }),
  check('confirmedpassword').not().isEmpty().trim().escape().isLength({ min:6, max:12 })
];

const loginValidation = [
  check('username').not().isEmpty().trim().escape().isLength({ min:6, max:12 }),
  check('password').not().isEmpty().trim().escape().isLength({ min:6, max:12 }),
];

// Registration page
router.get('/user/registration', (req, res) => {
  res.status(200).sendFile('./registration.html', { root: './public/' });
});

// Registration result
router.post('/user/register', registerValidation, async (req, res, next) => {
  const { username, email, password } = req.body;
  if (password) {
    await check('confirmedpassword').equals(password).withMessage('passwords do not match').run(req);
  }
  const errors = validationResult(req); // makes errors available to result object
  console.log('errors...', errors.errors);
  if (!errors.isEmpty()) {
    let errorMessage = 'Invalid input';
    errorMessage += 'Email address must be completed and valid, and the username and password must be completed and 6 - 12 characters long.';
    if (errors.errors.length == 1 && errors.errors[0].param === 'confirmedpassword') {
      errorMessage = 'The password and confirmation password do not match.';
    }
    errorMessage += `<a href="/user/registration">Please try again</a>`;
    const error = new Error(errorMessage);
    error.status = 422;
    return next(error);
  }
  User.findOne({ username:username })
    .then(user => {
      if (user) {
        const error = new Error(`Sorry, the username ${username} already exists. <a href="/user/login-page">Please try again</a>`);
        error.status = 422;
        return next(error);
      } else {
        const newUser = new User({ username, email, password });
        newUser.save()
        .then(data => {
          return res.status(200).send(`
          <h1>Successful registration</h1>
          <p>Welcome ${data.username}, thank you for registering as a new user</p>
          <p><a href="/">⬅ Home</a></p>
          `);
        })
      }
    })
    .catch(err => {
      return next(err);
    });
});

// Login page
router.get('/user/login-page', (req, res) => {
  res.status(200).sendFile('./login-page.html', { root: './public/' });
});

// Login result
router.post('/user/login', loginValidation, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error(`Invalid input. The username and password must be completed and 6 - 12 characters long. <a href="/user/login-page">Please try again</a>`);
    error.status = 422;
    return next(error);
  }
  const { username, password } = req.body;
  User.findOne({ username:username })
    .then(user => {
      if (!user) {
        const error = new Error('Username does not exist. <a href="/user/login-page">Please try again</a>');
        error.status = 422;
        return next(error);
      } else {
        user.comparePassword(password, function(error, isMatch) {
          if (error) return next(error);
          if (!isMatch) {
            const error = new Error('Incorrect password. <a href="/user/login-page">Please try again</a>');
            error.status = 422;
            return next(error);
          } else {
            res.status(200).send(`
              <h1>Successful login</h1>
              <p>${user.username} you are now logged in</p>
              <p><a href="/">⬅ Home</a></p>
            `);
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
        <p><a href="/">⬅ Home</a> | <a href="/users">All users</a></p>
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
          <li>Date added: ${new Date(Number(user.date)).toISOString()}</li>
          <li>ID: ${user._id}</li>
        </ul>`;
      });
      str += '<p><a href="/">⬅ Home</a></p>';
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
    <p><a href="/">⬅ Home</a></p>
  `);
});

module.exports = router;