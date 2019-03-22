var express = require('express');
var app = express();
var userRoutes = express.Router();
var User = require('../model/user');


userRoutes.post('/registration', function(req, res, next) {
  console.log("request body test"+req.body.email);
  console.log("request body test"+req.body.password);
  User.registration(req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows); //or return count for 1 & 0
    }
  });
});

userRoutes.post('/login', function(req, res, next) {

  User.login(req.body, function(error, count) {
    if (error) {
      console.log("error ocurred",error);
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
      // console.log('The solution is: ', results);
      if(count.length >0){
        if(count[0].password == req.body.password){
          res.send({
            "code":200,
            "success":"login sucessfull",
            "email":count[0].email,
            "user_id":count[0].user_id
          });
        }
        else{
          res.send({
            "code":204,
            "success":"Email and password does not match"
          });
        }
      }
      else{
        res.send({
          "code":204,
          "success":"Email does not exits"
        });
      }
    }
  });
});
module.exports = userRoutes;
