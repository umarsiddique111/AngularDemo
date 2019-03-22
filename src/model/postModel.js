
module.exports = (sequelize, Sequelize) => {
  const Posts = sequelize.define('posts', {
    postid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    postuser: {
      type: Sequelize.STRING
    },
    userid: {
      type: Sequelize.STRING
    },
    title: {
      type: Sequelize.STRING
    },
    text: {
      type: Sequelize.STRING
    },
    image: {
      type: Sequelize.TEXT
    },
    status: {
      type: Sequelize.TINYINT,
      defaultValue:0,
    },

  })
  return Posts;

}
