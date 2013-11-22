var user_controller = require('./routes/user');
var User = require('./lib/user');

module.exports = function(app) {

  // helpers
  app.param('login', function(req, res, next, login) {
    User.find({ login: login }, function(err, docs) {
      req.user = docs[0];
      console.log(req.user);
      next();
    });
  });

  // routes
  app.get('/users',             user_controller.index);
  app.get('/users/new',         user_controller.new);
  app.post('/users',            user_controller.create);
  app.get('/users/:login',      user_controller.show);
  app.get('/users/:login/edit', user_controller.edit);
  app.put('/users/:login',      user_controller.update);
  app.delete('/users/:login',   user_controller.delete);

};
