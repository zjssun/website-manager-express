var express = require('express');
const NewsController = require('../../controllers/admin/NewsController');
var NewsRouter = express.Router();
const multer = require('multer');

const upload = multer({dest: 'public/newsuploads/'});

NewsRouter.post("/adminapi/news/add",upload.single("file"),NewsController.add);
NewsRouter.get("/adminapi/news/list",NewsController.getList);
NewsRouter.get("/adminapi/news/list/:id",NewsController.getList);
NewsRouter.put("/adminapi/news/publish",NewsController.publish);
NewsRouter.delete("/adminapi/news/list/:id",NewsController.delete)
NewsRouter.post("/adminapi/news/list/",upload.single("file"),NewsController.updatenews);

module.exports = NewsRouter;