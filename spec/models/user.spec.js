var request = require('request');

describe("#user", function() {

  it("users page should respond 200", function(done) {
    request("http://localhost:3000/users", function(error, response, body) {
      expect(200);
      done();
    });
  });

});
