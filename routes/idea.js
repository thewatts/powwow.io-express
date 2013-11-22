
/*
 * GET Idea page.
 */

var express = require('express');
var router  = new express.Router();

router.get('/ideas', function(req, res) {
  //res.send(req.originalUrl + "\n");
  res.send("HAHAHA");
});
