var Questioniare=require('../app/controllers/questioniare');
module.exports=function(app){
    "use strict";
//all
    app.all('*', (req, res, next) => {
        next();
    })
//questioniare
    app.post('/addQuestionaire',Questioniare.addQuestioniare)
    app.get('/myQuestionaire/',Questioniare.myQuestioniare)
}


