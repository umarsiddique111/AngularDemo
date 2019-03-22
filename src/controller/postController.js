const db = require('../config');
const Post = db.posts;
const Comment = db.comments;
const comentcontroller = require('../controller/commentController')
// Post a posts
exports.create = (req, res) => {
  // Save to MySQL database
  Post.create({
    postuser: req.body.postuser,
    title: req.body.title,
    text: req.body.text,
    image: req.body.image,
    userid:req.body.userid
  }).then(user => {
    // Send created posts to client
    res.send(user);
  });
};

// FETCH all posts

exports.findAll = (req, res) => {

  Post.findAll({
    where: { status :true},
 /*   attributes: [['post_id', 'post_id']],*/
    include: [{
      model: Comment,
      /*where: { false :db.sequelize.col('posts.status')},*/
    }]}).then(post => {
    // Send all posts to Client
    res.send(post);
  });
};

// Find a posts by Id
exports.findById = (req, res) => {
  Post.findById(req.params.id).then(post => {
    res.send(post);
  })
};

// Update a posts
exports.update = (req, res) => {
  const id = req.params.id;
  Post.update( { title: req.body.title, text: req.body.text, image :req.body.image},
    { where: {id: req.params.id} }
  ).then(() => {
    res.status(200).send("updated successfully a Post with id = " + id);
  });
};

// Delete a posts by Id
exports.delete = (req, res) => {
  const id = req.params.id;

  Post.destroy({
    where: { postid: id },

  }).then(() => {
    comentcontroller.deletepost(req);
    res.json('deleted successfully a Post with id = ' + id);
  });
};
