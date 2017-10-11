var express=require('express');
var app=express();
var fs=require('fs');
app.use(function (req,res,next) {
    var t=new Date().toLocaleTimeString();
    fs.appendFile("./log.txt",t+'\n',function (err) {
        if(err){
            throw err;
        }
    })
    next();
});
app.get("/",function (req,res) {
    res.send('首页');
})
var server=app.listen(8000,'localhost',function(){
    console.log('express已启动');
    console.log('http://%s:%s',server.address().address,server.address().port);
})