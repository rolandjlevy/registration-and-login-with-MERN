// express-validator for controlling sanitization / validation
// status code 422: Unprocessable Entity
const { check, validationResult } = require('express-validator');

class Validation {
  constructor() {
    this.rules = {
      register: [
          check('username').not().isEmpty().trim().escape().isLength({ min:6, max:12 }),
          check('email').not().isEmpty().trim().isEmail().isLength({ max:128 }),
          check('password').not().isEmpty().trim().escape().isLength({ min:6, max:12 }),
          check('confirmedpassword').not().isEmpty().trim().escape().isLength({ min:6, max:12 })
      ],
      login: [
        check('username').not().isEmpty().trim().escape().isLength({ min:6, max:12 }),
        check('password').not().isEmpty().trim().escape().isLength({ min:6, max:12 }),
      ]
    }
  }
  // FIXME: not working
  register(req, res, next) {
    (async () => {
      if (req.body.password) {
        await check('confirmedpassword').equals(req.body.password).withMessage('passwords do not match').run(req);
      }
    });
    const errors = validationResult(req); // makes errors available to result object
    console.log('errors.errors', errors.errors)
    if (!errors.isEmpty()) { // errors found
      let errorMessage = 'Invalid input. ';
      errorMessage += 'Email address must be completed and valid, and the username and password must be completed and 6 - 12 characters long. ';
      if (errors.errors.length == 1 && errors.errors[0].param === 'confirmedpassword') {
        errorMessage = 'The password and confirmation password do not match. ';
      }
      errorMessage += `<a href="/user/registration">Please try again</a>`;
      console.log('errorMessage set, so true')
      return errorMessage;
    }
    console.log('no errorMessage, so false')
    return false;
  }
  // FIXME: not working
  login(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error(`Invalid input. The username and password must be completed and 6 - 12 characters long. <a href="/user/login-page">Please try again</a>`);
      error.status = 422;
      return next(error);
    }
  }
}

module.exports = Validation;