module.exports = function(app) {

  const posts = require('../controller/postController');

  // Create a new post
  app.post('/post/add', posts.create);

  // Retrieve all posts
  app.get('/allpost', posts.findAll);

  // Retrieve a single post by Id
  app.get('/postbyid/:id', posts.findById);

  // Update a post with Id
  app.put('/updatepost/:id', posts.update);

  // Delete a post with Id
  app.delete('/deletepost/:id', posts.delete);
}
