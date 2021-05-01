const mongoose = require('mongoose');

// Schema
const UserSchema = new mongoose.Schema({
  title: String,
  body: String,
  date: {
      type: String,
      default: Date.now()
  }
});
const User = mongoose.model('User', UserSchema);

module.exports = User;