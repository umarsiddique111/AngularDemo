/*

var db = require('../config');
var User = {

  login: function(user,callback) {
    return db.query("Select * from users where email=?",[user.email], callback);
  },

  registration: function(user, callback) {
    console.log(user);
    return db.query("insert into users (email,password) values(?,?)", [user.email,user.password], callback);
  },

  updateUser: function(user, callback) {
    return db.query("update posts (title,text) set posts=? where id=?", [user.email, user.password], callback);
  }
};
module.exports = User;
*/
