module.exports = function(app) {

  const users = require('../controller/userController');

  // Create a new Customer
  app.post('/user/add', users.create);

  // Retrieve all Customer
  app.get('/allusers', users.findAll);

  // Retrieve a single Customer by Id
  app.get('/userbyid/:userId', users.findById);

  // Retrieve a single Customer by Id
  app.post('/user/login', users.findByEmail);
  // Update a Customer with Id
  app.put('/updateuser/:userId', users.update);

  // Delete a Customer with Id
  app.delete('/deleteuser/:userId', users.delete);
}
