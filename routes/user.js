
/*
 * GET users listing.
 */

User = require('../lib/user');

exports.index = function(req, res) {
  User.find({}, function(err, users) {
    res.render('user/index', { users: users });
  });
};

// NEW
exports.new = function(req, res) {
  res.render('user/new');
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
    res.redirect('/user/' + user.login);
  });
};

// SHOW
exports.show = function (req, res) {
  res.render('user/show', {user: req.user });
};

// EDIT
exports.edit = function (req, res) {
  res.render('user/edit', {user: req.user });
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

