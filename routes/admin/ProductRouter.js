var express = require('express');
var Productrouter = express.Router();
var multer = require('multer');
const ProductController = require('../../controllers/admin/ProductController');



const upload = multer({ dest: 'public/productuploads/'});

Productrouter.post('/adminapi/product/add',upload.single('file'),ProductController.add);
Productrouter.get('/adminapi/product/list',ProductController.getlist);
Productrouter.get('/adminapi/product/list/:id',ProductController.getlist);
Productrouter.post('/adminapi/product/list',upload.single('file'),ProductController.update);
Productrouter.delete('/adminapi/product/list/:id',ProductController.delete);

module.exports = Productrouter;

