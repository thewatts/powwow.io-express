var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  login: String,
   name: String,
  email: String,
    age: Number
});

var User = mongoose.model('User', userSchema);

module.exports = User;


