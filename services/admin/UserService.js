const UserModel = require("../../models/UserModel");

const UserService ={
   login:async({username,password})=>{
      return UserModel.find({
         username,
         password
      })
   },
   upload:async({_id,username,introduction,gender,avatar})=>{
      if(avatar){
         return UserModel.updateOne({_id},{username,introduction,gender,avatar});
      }else{
         return UserModel.updateOne({_id},{username,introduction,gender});
      }
   },
   add:async({username,introduction,gender,avatar,password,role})=>{
      return UserModel.create({username,introduction,gender,avatar,password,role});
   },
   getList:async ()=>{
      return UserModel.find({},["username","role","avatar","introduction","gender"]);
   }
}

module.exports = UserService;