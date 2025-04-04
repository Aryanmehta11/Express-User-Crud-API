const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{type:String,required:true} , 
    email:{type:String,required:true,unique:true},
    isDeleted:{type:Boolean,default:false} ,
    deletedAt:{type:Date}} ,{timestamps:true});

const User=mongoose.model('User',userSchema);
module.exports=User;