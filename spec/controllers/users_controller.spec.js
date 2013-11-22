var request = require('request');

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
    request.post("http://localhost:3000/users/create",
      function(error, response, body) {
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
