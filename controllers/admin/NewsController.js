const NewsService = require("../../services/admin/NewsService");

const NewsController = {
   add:async(req,res)=>{
      const cover = req.file ? `/newsupload/${req.file.filename}` : '';
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
   }
}

module.exports = NewsController;