const mongoose = require('mongoose');

// Schema
const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  date: {
      type: String,
      default: Date.now()
  }
});
const User = mongoose.model('User', UserSchema);

module.exports = User;