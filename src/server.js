const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
     /* PostRoutes = require('./expressRouter/postRoutes'),*/
      /*userRouters = require('./expressRouter/usersRouters'),
      commentRoutes = require('./expressRouter/commentRoutes'),*/
      cors = require('cors');






const app = express();
app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true }));
/*app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  // Request methods you wish to allow
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.header("Access-Control-Allow-Headers", 'X-Requested-With,Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});*/
app.use(cors());
require('./controller/userRouter')(app);
require('./controller/postRouter')(app);
require('./controller/commentRouter')(app);
const port = process.env.PORT || 4000;
/*app.use('/user', userRouter);*/
/*app.use('/user', userRouters);
app.use('/comment', commentRoutes);*/



const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});
