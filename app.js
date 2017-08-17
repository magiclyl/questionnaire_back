var express=require("express");
var app=express();
var port = process.env.PORT||3000;
var path=require('path');
//var mongoStore=require('connect-mongo')(session)
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/questioniare');/////mongod.exe --dbpath d:\mongodb\data\db
var bodyParser = require('body-parser')
var dbUrl='mongodb://localhost/questioniare';
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use(bodyParser())
require('./routes/routes')(app)

app.listen(port);
console.log("questioniare site started at "+port);

