var app = require('./app');
var users_controller = require('./routes/user');
var ideas_controller = require('./routes/idea');

module.exports = function(app) {

  // helpers
  app.param('login', function(req, res, next, login) {
    User.find({ login: login }, function(err, docs) {
      req.user = docs[0];
      next();
    });
  });

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
