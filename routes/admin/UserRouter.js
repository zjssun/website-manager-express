var express = require('express');
var UserRouter = express.Router();
const UserController = require('../../controllers/admin/UserController');
const multer = require('multer');
const upload = multer({dest:'public/avataruploads/'});

UserRouter.post("/adminapi/user/login",UserController.login);
UserRouter.post("/adminapi/user/upload",upload.single('file'),UserController.upload);
UserRouter.post("/adminapi/user/add",upload.single('file'),UserController.add);
//用户列表的增删改查
UserRouter.get("/adminapi/user/list",UserController.list);
UserRouter.get("/adminapi/user/list/:id",UserController.list);
UserRouter.put("/adminapi/user/list/:id",UserController.putlist);
UserRouter.delete("/adminapi/user/list/:id",UserController.delete);

module.exports = UserRouter;