
/*
var db = require('../config');
var Post = {

  getAllActivePosts: function(callback) {
    return db.query("SELECT * FROM posts INNER JOIN comments comm ON comm.post_id = posts.id", callback);
  },
  getPostById: function(id, callback) {
    return db.query("select * from posts where id=?", [id], callback);
  },
  addPost: function(post, callback) {

    return db.query("insert into posts (title,text,username,user_id,image) values(?,?,?,?,?)", [post.title, post.text,post.username,post.user_id,post.image], callback);
  },
  deletePost: function(id, callback) {
    return db.query("delete from posts where Id=?", [id], callback);
  },
  updatePost: function(id, Post, callback) {
    return db.query("update posts (title,text) set posts=? where id=?", [Post.title, Post.text], callback);
  }
};
module.exports = Post;

*/
