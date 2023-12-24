var express = require('express');
var UserRouter = express.Router();
const UserController = require('../../controllers/admin/UserController');

UserRouter.post("/adminapi/user/login",UserController.login);

module.exports = UserRouter;