const express = require('express');
const router = express.Router();

const User = require('../models/User.js');


router.get('/', (req, res) => {
  res.send(`
    <h1>Home</h1>
    <p><a href="/user/register">Register as a new user</p>
    <p><a href="/users">See all users</a></p>
    `);
  });

router.get('/user/register', (req, res) => {
  res.send(`
    <h1>Register new user</h1>
    <form method="post" action="/user/save">
      <p><input type="text" name="username" placeholder="Enter your username" required /></p>
      <p><input type="email" name="email" placeholder="Enter your email" required /></p>
      <p><input type="text" name="password" placeholder="Enter your password" required /></p>
      <p><input type="password" name="confirmedpassword" placeholder="Confirm your password" required /></p>
      <p><button type="submit">Save data</button></p>
    </form>
    <p><a href="/">Home</a></p>
  `);
});

router.post('/user/save', (req, res) => {
  // get posted data from form
  const { username, email, password, confirmedpassword } = req.body;
  console.log({ username, email, password, confirmedpassword })
  // instance of model
  const newUser = new User({ username, email, password, confirmedpassword });
  // saving data into db
    newUser.save((error) => {
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

router.post('/user/login', (req, res) => {
});

router.get('/users', (req, res) => {
    User.find({  })
    .then(data => {
      let str = '<h1>All users</h1>';
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

module.exports = router;