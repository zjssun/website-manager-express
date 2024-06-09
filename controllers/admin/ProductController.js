const ProductService = require('../../services/admin/ProductService');

const ProductController = {
   add: async (req, res) => {
      const cover =  req.file ? `/productuploads/${req.file.filename}` : '';
      const { title,introduction,detail } = req.body;
      await ProductService.add({
          title,
          introduction,
          detail,
          cover,
          editTime: new Date(),
      });
      res.send({
         ActionType: "OK",
      });
   },

   getlist: async (req, res) => {
      const result = await ProductService.getlist({_id:req.params.id});
      res.send({
         ActionType: "OK",
         data: result,
      });
   },

   delete: async (req, res) => {
      await ProductService.delete({_id:req.params.id});
      res.send({
         ActionType: "OK"
      })
   },

   update: async (req, res) => {
      const cover =  req.file ? `/productuploads/${req.file.filename}` : '';
      const { title,introduction,detail } = req.body;
      await ProductService.update({
         _id,
         title,
         introduction,
         detail,
         cover,
         editTime: new Date(),
      })
   }
}

module.exports = ProductController;