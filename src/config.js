/*var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  database : 'postangulardb',
  user     : 'root',
  password : 'str0ng',
  port     : '3306'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});*/


const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelizeexample', 'root', 'str0ng', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,


});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.users = require('./model/userModel')(sequelize, Sequelize);
db.posts = require('./model/postModel')(sequelize, Sequelize);
db.comments = require('./model/commentModel')(sequelize, Sequelize);
db.posts.hasMany(db.comments, {foreignKey: 'postid'});
/*posts.belongsTo(comments);*/

db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync with { force: false }');
});



module.exports = db;
