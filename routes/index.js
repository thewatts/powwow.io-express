
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express is the bomb!' });
};

// require('./routes/idea');
