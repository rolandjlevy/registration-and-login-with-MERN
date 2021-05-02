const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 6,
    max: 15
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 15
  },
  date: {
      type: String,
      default: Date.now()
  }
});

// use mongoose's middleware
UserSchema.pre('save', async function(next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.comparePassword = function(password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (error) {
      return cb(error);
    } else {
      if (!isMatch) {
        return cb(null, isMatch);
      }
      return cb(null, this);
    }
  })
}

module.exports = mongoose.model('User', UserSchema);