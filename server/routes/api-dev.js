const express = require('express');
const router = express.Router();
const User = require('../models/User.js');

const { check, validationResult } = require('express-validator');
const Validation = require('../classes/Validation.js');
const validate = new Validation();

const unprocessableEntityStatus = 422;

// API routes 

// Registration result
router.post('/user/register', validate.rules.register, async (req, res, next) => {
  const { username, email, password } = req.body;
  if (password) {
    await check('confirmedpassword').equals(password).withMessage('passwords do not match').run(req);
  }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    let errorMessage = 'Invalid input. ';
    errorMessage += 'Email must be valid, and the username and password must be 6 - 24 characters long.';
    if (errors.errors.length == 1 && errors.errors[0].param === 'confirmedpassword') {
      errorMessage = 'The password and confirmation password do not match.';
    }
    const error = new Error(errorMessage);
    error.status = unprocessableEntityStatus;
    return next(error);
  }
  User.findOne({ username:username })
    .then(user => {
      if (user) {
        const error = new Error(`Sorry, the username ${username} already exists. Please try a different one.`);
        error.status = unprocessableEntityStatus;
        return next(error);
      } else {
        const newUser = new User({ username, email, password });
        newUser.save()
        .then(newUserData => {
          return res.status(200).send({
            error: false,
            data: newUserData,
            message: `Thank you ${username}, your user account has been set up. You can now login.`
          });
        })
      }
    })
    .catch(err => {
      return next(err);
    });
});

// Login result
router.post('/user/login', validate.rules.login, (req, res, next) => {
  const { username, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Invalid input. The username and password must be completed and be 6 - 24 characters long.');
    error.status = unprocessableEntityStatus;
    return next(error);
  }
  User.findOne({ username:username })
    .then(user => {
      if (!user) {
        const error = new Error('Username does not exist');
        error.status = unprocessableEntityStatus;
        return next(error);
      } else {
        user.comparePassword(password, function(error, isMatch) {
          if (error) return next(error);
          if (!isMatch) {
            const error = new Error('Incorrect password');
            error.status = unprocessableEntityStatus;
            return next(error);
          } else {
            res.status(200).json({
              error: false,
              data: user,
              message: `Thank you ${username}, you have logged in successfully. Your customer details are shown below.`
            });
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
      res.status(200).json({
        error: false,
        ...user
      });
    })
    .catch(err =>  {
      return next(err);
    });
});

// View all users
router.get('/users', (req, res, next) => {
  User.find({  })
  .then(users => {
    res.status(200).json({
      error: false,
      data: users
    });
  })
  .catch(err => {
    return next(err);
  });
});

// Page not found
router.get('*', (req, res, next) => {
  var url = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.status(404).json({
    error: true,
    message: 'Error 404! Page not found. Unable to access ' + url
  });
});

module.exports = router;