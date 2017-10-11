var express=require('express');
var app=express();
var fs=require('fs');
app.use('/list',function (req,res,next) {
    var t=new Date().toLocaleTimeString();
    fs.appendFile("./log2.txt",t+'\n',function (err) {
        if(err){
            throw err;
        }
    })
    next();
});
app.get("/",function (req,res) {
    res.send('首页');
})
app.get("/list",function (req,res) {
    res.send('列表');
})
var server=app.listen(8000,'localhost',function(){
    console.log('express已启动');
    console.log('http://%s:%s',server.address().address,server.address().port);
})