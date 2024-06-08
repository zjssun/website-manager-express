const NewsService = require("../../services/admin/NewsService");

const NewsController = {
   add:async(req,res)=>{
      const cover = req.file ? `/newsuploads/${req.file.filename}` : '';
      const {title,content,category,isPublish} = req.body;
      await NewsService.add({
         title,
         content,
         category:Number(category),
         cover,
         isPublish:Number(isPublish),
         editTime:new Date()
      });
      res.send({
         ActionType: "OK",
      })
   },

   getList:async(req,res)=>{
      const result = await NewsService.getList({_id:req.params.id});
      res.send({
         ActionType: "OK",
         data: result
      })
   },

   publish:async(req,res)=>{
      await NewsService.publish({
         ...req.body,
         editTime:new Date()
      });
      res.send({
         ActionType: "OK",
      })
   },

   delete:async(req,res)=>{
      await NewsService.delete({_id:req.params.id});
      res.send({
         ActionType: "OK",
      });
   },

   updatenews:async(req,res)=>{
      const cover = req.file ? `/newsuploads/${req.file.filename}` : '';
      const {title,content,category,isPublish,_id} = req.body;
      await NewsService.updatenews({
         _id,
         title,
         content,
         category:Number(category),
         cover,
         isPublish:Number(isPublish),
         editTime:new Date()
      });
      res.send({
         ActionType: "OK",
      })
   },
}

module.exports = NewsController;