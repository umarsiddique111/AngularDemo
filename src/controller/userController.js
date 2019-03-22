const db = require('../config');
const User = db.users;

// Post a users
exports.create = (req, res) => {
  // Save to MySQL database
  User.create({
    email: req.body.email,
    password: req.body.password,
  }).then(user => {
    // Send created users to client
    res.send(user);
  });
};

// FETCH all users
exports.findAll = (req, res) => {
  User.findAll().then(users => {
    // Send all users to Client
    res.send(users);
  });
};

// Find a users by Id
exports.findById = (req, res) => {
  User.findById(req.params.customerId).then(user => {
    res.send(user);
  })
};
// login
exports.findByEmail = (req, res) => {
  User.findOne(
    { where: {email: req.body.email} }).then(function(user) {
    if (!user) {
      res.send({
        "code": 204,
        "success": "Email does not exits"
      });
    } else {

      if (user.password == req.body.password) {
          res.send({
            "code": 200,
            "success": "login sucessfull",
            "email": user.email,
            "user_id": user.id
          });
        }
        else {
          res.send({
            "code": 204,
            "success": "Email and password does not match"
          });
        }
      }

  });
  };


// Update a users
exports.update = (req, res) => {
  const id = req.params.userId;
  User.update( { email: req.body.email, password: req.body.password},
    { where: {id: req.params.userId} }
  ).then(() => {
    res.status(200).send("updated successfully a customer with id = " + id);
  });
};

// Delete a users by Id
exports.delete = (req, res) => {
  const id = req.params.userId;
  User.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a customer with id = ' + id);
  });
};
