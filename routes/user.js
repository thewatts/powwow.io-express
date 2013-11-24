
/*
 * GET users listing.
 */

User = require('../lib/user');

exports.index = function(req, res) {
  User.find({}, function(err, docs) {
    res.render('users/index', { users: docs });
  });
};

// NEW
exports.new = function(req, res) {
  res.render('users/new');
};

// CREATE
exports.create = function(req, res) {
  var b = req.body;
  new User({
    login: b.login,
    name:  b.name,
    email: b.email.toLowerCase(),
    age:   b.age,
  }).save(function (err, user) {
    if (err) res.json(err);
    res.redirect('/users/' + user.login);
  });
};

// SHOW
exports.show = function (req, res) {
  res.render('users/show', {user: req.user });
};

// EDIT
exports.edit = function (req, res) {
  res.render('users/edit', {user: req.user });
};

// UPDATE
exports.update = function(req, res) {
  var b = req.body;
  User.update(
    { login: req.params.login },
    { login: b.login, name: b.name, age: b.age, email: b.email },
    function (err) {
      if (err) res.json(err);
      res.redirect('/users');
  });
};

// DELETE
exports.delete = function(req, res) {
  User.remove({ login: req.params.login }, function (err) {
    res.redirect('/users');
  });
};

