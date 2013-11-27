var app                     = require('./app');
var static_pages_controller = require('./routes/static_pages');
var activity_controller     = require('./routes/activity');
var users_controller        = require('./routes/user');
var ideas_controller        = require('./routes/idea');

module.exports = function(app) {

  // helpers
  app.param('login', function(req, res, next, login) {
    User.find({ login: login }, function(err, docs) {
      req.user = docs[0];
      next();
    });
  });

  // home
  app.get('/', static_pages_controller.index);

  // activity
  app.get('/activity', activity_pages_controller.index);

  // users
  app.get('/users',             users_controller.index);
  app.get('/users/new',         users_controller.new);
  app.post('/users',            users_controller.create);
  app.get('/users/:login',      users_controller.show);
  app.get('/users/:login/edit', users_controller.edit);
  app.put('/users/:login',      users_controller.update);
  app.delete('/users/:login',   users_controller.delete);

  // ideas
  app.get('/ideas', ideas_controller.index);

};
