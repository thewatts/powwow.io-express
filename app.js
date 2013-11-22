
/**
 * Module dependencies.
 */

var express  = require('express');
var mongoose = require('mongoose');
//var user     = require('./routes/user');
var http     = require('http');
var path     = require('path');

var app      = express();

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

app.post('/users', function(req, res) {
  var b = req.body;
  console.log('-----body-----');
  console.log(b);
  new User({
    login: b.login,
    name:  b.name,
    email: b.email.toLowerCase(),
    age:   b.age,
  }).save(function (err, user) {
    if (err) res.json(err);
    res.redirect('/users/' + user.login);
  });
});

//var routes = require('./routes')(app);

//app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
