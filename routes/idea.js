
/*
 * GET Idea page.
 */

var Idea = require('../lib/idea');

exports.index = function(req, res) {
  Idea.find({}, function(err, ideas) {
    res.render('idea/index', { ideas: ideas });
  });
};
