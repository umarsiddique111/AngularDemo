var express = require('express');
var app = express();
var commentRoutes = express.Router();
var Comment = require('../model/comment');



commentRoutes.post('/add', function(req, res, next) {
  console.log(req.body)
  Comment.addComment(req.body, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body); //or return count for 1 & 0
    }
  });

});


module.exports = commentRoutes;
