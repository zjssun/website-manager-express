const ProductModel = require("../../models/ProductModel");

ProductService = {

   add: async({title,introduction,detail,cover,editTime})=>{
      return await ProductModel.create({title,introduction,detail,cover,editTime});
   },

   getlist: async({_id})=>{
      return _id ? await ProductModel.find({_id}) : await ProductModel.find({});
   },

   delete: async({_id})=>{
      return await ProductModel.deleteOne({_id});
   },

   update:async ({_id,title,introduction,detail,cover,editTime})=>{
      if(cover){
          return await ProductModel.updateOne({_id},{title,introduction,detail,cover,editTime});
      }else{
          return await ProductModel.updateOne({_id},{title,introduction,detail,editTime});
      }
   }
}

module.exports = ProductService;