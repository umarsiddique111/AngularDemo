/*

var db = require('../config');
var Comment = {

  getAllComment: function(callback) {
    return db.query("Select * from comments where active = true", callback);
  },
  getCommentById: function(id, callback) {
    return db.query("select * from comments where comments.post_id = ", [id], callback);
  },
  addComment: function(comment, callback) {

    return db.query("insert into comments (username,comment,post_id) values(?,?,?)", [comment.username, comment.comment,comment.post_id], callback);
  },
  deleteComment: function(id, callback) {
    return db.query("delete from comments where Id=?", [id], callback);
  },
  updateComment: function(id, Post, callback) {
    return db.query("update comments (title,text) set comments=? where id=?", [comments.title, comments.text], callback);
  }
};
module.exports = Comment;

*/
