var mongoose=require("mongoose");
var questioniareSchema=new mongoose.Schema({
    title:String,
    id:String,
    description:String,
    subject:[{
        title:String,
        askType:String,
        description:String,
        isRequire:String,
        optionList:Array
    }],
    pageWiew:Number,
    recovery:Number,
    averageCompletionTime:Number,
    /*timesamp:{
        createAt:Date,
        default:Date.now()
    }*/
})
/*questioniareSchema.pre('save',function(next){//在存储数据之前调用
    this.timesamp.createAt=Date.now();
    next();
});*/
module.exports=questioniareSchema;