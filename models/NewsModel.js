const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsType = {
   title:String,
   content:String,
   category:Number,
   cover:String,
   isPublised:Number,
   editTime:Date,
};
const NewsModel = mongoose.model("news",new Schema(NewsType));

module.exports = NewsModel;