'use strict'

var User = require('../Controllers/UserController');

module.exports = function (app){
  app.get('/User/Get/:Id', User.GetUser);
}