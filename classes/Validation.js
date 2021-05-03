// express-validator for controlling sanitization / validation
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
}

module.exports = Validation;