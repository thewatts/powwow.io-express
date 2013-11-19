
/**
 * Module dependencies.
 */

var express = require('express');
var mongoose = require('mongoose');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  mongoose.connect('mongodb://localhost/powwow_dev');
}

if ('test' == app.get('env')) {
  app.use(express.errorHandler());
  mongoose.connect('mongodb://localhost/powwow_test');
}

var UserSchema = new mongoose.Schema({
   name: String,
  email: String,
    age: Number
});

var Users = mongoose.model('Users', UserSchema);

// INDEX
app.get('/users', function(req, res) {
  Users.find({}, function(err, docs) {
    res.render('users/index', { users: docs });
  });
});

// NEW
app.get('/users/new', function(req, res) {
  res.render('users/new');
});

// CREATE
app.post('/users', function(req, res) {
  var b = req.body;
  new Users({
    name:  b.name,
    email: b.email.toLowerCase(),
    age:   b.age,
  }).save(function (err, user) {
    if (err) res.json(err);
    res.redirect('/users/' + user.name);
  });
});

app.param('name', function(req, res, next, name) {
  Users.find({ name: name }, function(err, docs) {
    req.user = docs[0];
    console.log(req.user);
    next();
  });
});

// SHOW
app.get('/users/:name', function (req, res) {
  res.render('users/show', {user: req.user });
});

// EDIT
app.get('/users/:name/edit', function (req, res) {
  res.render('users/edit', {user: req.user });
});

// UPDATE
app.put('/users/:name', function(req, res) {
  var b = req.body;
  Users.update(
    { name: req.params.name },
    { name: b.name, age: b.age, email: b.email },
    function (err) {
      if (err) res.json(err);
      res.redirect('/users');
  });
});

// DELETE
app.delete('/users/:name', function(req, res) {
  Users.remove({ name: req.params.name }, function (err) {
    res.redirect('/users');
  });
});

app.get('/', routes.index);
//app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
