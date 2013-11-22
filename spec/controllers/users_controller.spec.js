var express  = require('express');
var request  = require('request');
var mongoose = require('mongoose');
var User     = require('../../lib/user');
mongoose.connect('mongodb://localhost/powwow_test');

var app = express();

describe("#users", function() {

  beforeEach(function() {
    console.log( app.get('env') );
  });

  it("should have a correct user count", function(done) {
    User.count({}, function(err, count) {
      expect(count).toEqual(10);
      done();
    });
  });

  xit("should respond 200 on index page", function(done) {
    request("http://localhost:3000/users", function(error, response, body) {
      expect(response.statusCode).toEqual(200);
      done();
    });
  });

  xit("should respond 200 on user new page", function(done) {
    request("http://localhost:3000/users/new", function(error, response, body) {
      expect(response.statusCode).toEqual(200);
      done();
    });
  });

  it("should create a user", function(done) {
    User.count({}, function(err, count) {
      expect(count).toEqual(10);
    });
    var params = {
      "login":"thewatts!",
      "name":"Nathaniel",
      "email":"reg@nathanielwatts.com",
      "age":"20"
    }
    request.post("http://localhost:3000/users", {form: params},
      function(error, response, body) {
        console.log('---------------------');
        console.log(body);
        expect(response.statusCode).toEqual(302);
      }
    );
    User.count({}, function(err, count) {
      expect(count).toEqual(10);
      done();
    });
  });

  xit("should respond 200 on user show page", function(done) {
    request("http://localhost:3000/users/", function(error, response, body) {
      expect(response.statusCode).toEqual(200);
      done();
    });
  });

});
