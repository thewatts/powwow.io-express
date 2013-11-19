describe("MongoDB", function() {
  it("should be running", function(done) {
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/powwow_test');
    var db = mongoose.connection;
    expect(db).not.toBe(null);
    done();
  });
});
