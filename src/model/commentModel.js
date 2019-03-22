module.exports = (sequelize, Sequelize) => {
  const Comments = sequelize.define('comments', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: Sequelize.STRING
    },
    postid: {
      type: Sequelize.INTEGER,

    },
    comment: {
      type: Sequelize.TEXT
    },

  })
  return Comments;
}
