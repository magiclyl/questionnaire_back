var mongoose=require('mongoose');
var questioniareSchema=require('../schemas/questioniare');
var questioniare=mongoose.model('questioniare',questioniareSchema);//编译生成movie模型
module.exports=questioniare;