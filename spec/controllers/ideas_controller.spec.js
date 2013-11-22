var request = require('request');

describe("#ideas", function() {

  it("should respond 200 on idea index page", function(done) {
    request("http://localhost:3000/ideas", function(error, response, body) {
      expect(response.statusCode).toEqual(200);
      done();
    });
  });

});
