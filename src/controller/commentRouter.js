module.exports = function(app) {

  const comments = require('../controller/commentController');

  // Create a new comment
  app.post('/comment/add', comments.create);

  // Retrieve all comments
  app.get('/allcomment', comments.findAll);

  // Retrieve a single comment by Id
  app.get('/commentbyid/:id', comments.findById);

  // Update a comment with Id
  app.put('/updatecomment/:id', comments.update);

  // Delete a comment with Id
  app.delete('/deletecomment/:id', comments.delete);
}
