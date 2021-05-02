const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 6,
    max: 15,
    index: { unique: true }
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

// use mongoose's middleware to hash password before save
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);
        this.password = hash;
        next();
    });
  });
});


  // try {
  //   const salt = await bcrypt.genSalt(10);
  //   const hashedPassword = await bcrypt.hash(this.password, salt);
  //   this.password = hashedPassword;
  //   next();
  // } catch (error) {
  //   next(error);
  // }

UserSchema.methods.comparePassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
}

// UserSchema.methods.comparePassword = function(password, cb) {
//   bcrypt.compare(password, this.password, function(error, isMatch) {
//     if (error) {
//       return cb(error);
//     } else {
//       if (!isMatch) {
//         return cb(null, isMatch);
//       }
//       return cb(null, this);
//     }
//   })
// }

module.exports = mongoose.model('User', UserSchema);