//var mongoose = require('mongoose');
//var request  = require('request');
//var User     = require('../../lib/user');
//
//db = mongoose.createConnection('mongodb://localhost/powwow_test');
//
//describe("#User", function() {
//
//  xit("should be able to remove users", function(done) {
//
//    new User({
//      login: "thewatts",
//      name:  "Nathaniel",
//      email: "reg@nathanielwatts.com",
//      age:   20
//    }).save(function (err, user) {});
//
//    User.count({}, function(err, count) {
//      expect(count).toEqual(1);
//      done();
//    });
//
//    var query = User.remove({});
//    query.exec();
//
//    User.count({}, function(err, count) {
//      expect(count).toEqual(0);
//      done();
//    });
//
//
//  });
//
//});
