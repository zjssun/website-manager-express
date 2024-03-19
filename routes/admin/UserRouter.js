var express = require('express');
var UserRouter = express.Router();
const UserController = require('../../controllers/admin/UserController');
const multer = require('multer');
const upload = multer({dest:'public/avataruploads/'});

UserRouter.post("/adminapi/user/login",UserController.login);
UserRouter.post("/adminapi/user/upload",upload.single('file'),UserController.upload);
UserRouter.post("/adminapi/user/add",upload.single('file'),UserController.add);
UserRouter.get("/adminapi/user/list",UserController.list);

module.exports = UserRouter;