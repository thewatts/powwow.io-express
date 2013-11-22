var request  = require('request');
var mongoose = require('mongoose');
var User     = require('../../lib/user');
mongoose.connect('mongodb://localhost/powwow_test');

describe("#users", function() {

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
    var params = "login=thewatts&name=Nathaniel&email=asdf@asdf.com&age=28"
    request.post("http://localhost:3000/users?testing=chicken",
      function(error, response, body) {
        console.log('---------------------');
        console.log(body);
        expect(response.statusCode).toEqual(200);
        done();
      }
    );
  });

  xit("should respond 200 on user show page", function(done) {
    request("http://localhost:3000/users/", function(error, response, body) {
      expect(response.statusCode).toEqual(200);
      done();
    });
  });

});
