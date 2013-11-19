var request = require('request');

describe("app", function() {

  it("home page should respond 200", function(done) {
    request("http://localhost:3000/", function(error, response, body) {
      expect(200);
      done();
    });
  });

  it("random page should respond 404", function(done) {
    request("http://localhost:3000/BOOMSHAKA", function(error, response, body) {
      expect(404);
      done();
    });
  });

});
