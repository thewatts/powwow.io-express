var request = require('request');
var app     = require('../../app.js');

describe("#users", function() {

  beforeEach(function() {
    User.remove({}, function(){});
  });

  it("should respond 200 on index page", function(done) {
    request("http://localhost:3000/users", function(error, response, body) {
      expect(response.statusCode).toEqual(200);
      done();
    });
  });

  it("should respond 200 on user new page", function(done) {
    request("http://localhost:3000/users/new", function(error, response, body) {
      expect(response.statusCode).toEqual(200);
      done();
    });
  });

  it("should create a user", function(done) {
    User.count({}, function(err, count) {
      expect(count).toEqual(0);
      done();
    });

    var params = {
      "login":"YO MAMA",
      "name":"Benjamin",
      "email":"reg@sdf.com",
      "age":"20"
    }
    request.post("http://localhost:3000/users", {form: params},
      function(error, response, body) {
        expect(response.statusCode).toEqual(302);

        User.count({}, function(err, count) {
          expect(count).toEqual(1);
          done();
        });
      }
    );

  });

  it("should respond 200 on user show page", function(done) {
    new User({
      login: "thewatts",
      email: "reg@nathanielwatts.com",
      name: "Nathaniel",
      age: 20
    }).save(function() {
      request("http://localhost:3000/users/thewatts",
        function(error, response, body) {
          expect(response.statusCode).toEqual(200);
          done();
      });
    });
  });

});
