var express = require('express');
var app = express();
var postRoutes = express.Router();
var Post = require('../model/post');


postRoutes.get('/allactive', function(req, res, next) {
Post.getAllActivePosts(function(err, data) {
  if (err) {
    console.log(err)
    res.send(err);
  } else {
    if (data.length > 0) {
      res.send(data);
      console.log(data);
    }

    else
    {
      res.send({
        "code":204,
        "success":"No Any Active Post Exists  "
      });
    }
  }

});
});
postRoutes.get('/:id?', function(req, res, next) {
  if (req.params.id) {
    Post.getPostById(req.params.id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    /*Post.getAllPosts(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });*/
  }
});
postRoutes.post('/add', function(req, res, next) {
  Post.addPost(req.body, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body); //or return count for 1 & 0
    }
  });

});
postRoutes.delete('/:id', function(req, res, next) {
  Post.deletePost(req.params.id, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});
postRoutes.put('/:id', function(req, res, next) {
  Post.updatePost(req.params.id, req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = postRoutes;
