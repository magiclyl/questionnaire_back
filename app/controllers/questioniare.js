var Questioniare=require('../models/questioniare');
//添加问卷
exports.addQuestioniare=(req, res) =>{
    "use strict";
    var ques=req.body;
    console.log(ques)
    var questioniare = new Questioniare(ques);
    questioniare.save((err, data) => {
        if (err) console.log(err)
        else res.send({result:0,message:"成功"})
    })
}
//我的问卷
exports.myQuestioniare=(req, res) => {
    var type=req.param('type');
    var page=req.param('page');
    console.log(type)
    console.log(page)
    Questioniare.find(function(err,data){
        if (err) console.log(err)
        else res.send({result:0,data:data})
    })
}
