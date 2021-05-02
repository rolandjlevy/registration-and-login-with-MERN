const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: [6, 'Usernames must be at least 6 characters, got {VALUE}'],
    max: [15, 'Usernames must not be at more than 15 characters, got {VALUE}'],
    index: { unique: true }
  },
  password: {
    type: String,
    required: true,
    min: [6, 'Passwords must be at least 6 characters, got {VALUE}'],
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

// use mongoose's middleware to hash password before save
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
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
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
}

module.exports = mongoose.model('User', UserSchema);