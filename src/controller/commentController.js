const db = require('../config');
const Comment = db.comments;

// Post a Comments
exports.create = (req, res) => {
  // Save to MySQL database
  Comment.create({
    username: req.body.username,
    postid: req.body.postid,
    comment: req.body.comment,

  }).then(comment => {
    // Send created Comments to client
    res.send(comment);
  });
};

// FETCH all Comment
exports.findAll = (req, res) => {
  Comment.findAll().then(comments => {
    // Send all Comments to Client
    res.send(comments);
  });
};

// Find a Comment by Id
exports.findById = (req, res) => {
  Comment.findById(req.params.id).then(comment => {
    res.send(comment);
  })
};

// Update a Comment
exports.update = (req, res) => {
  const id = req.params.id;
  Comment.update( { username: req.body.username, post_id: req.body.post_id, comment :req.body.comment},
    { where: {id: req.params.id} }
  ).then(() => {
    res.status(200).send("updated successfully a Comment with id = " + id);
  });
};

// Delete a Comment by Id
exports.delete = (req, res) => {
  const id = req.params.id;
  Comment.destroy({
    where: { id: id }
  }).then(() => {
    res.json('deleted successfully a Comment with id = ' + id);
  });
};

// Delete a Comment by Id
exports.deletepost = (req, res) => {
  const id = req.params.id;
  Comment.destroy({
    where: { postid: id }
  }).then(() => {

  });
};
