var express=require('express');
var app=express();
// console.log(app);
//当浏览器发起get请求的时，并且请求地址为'/'时触发操作
app.get('/',function(req,res){
    res.send("hello world");
});
var server=app.listen(8000,'localhost',function(){
    console.log('express已启动');
    console.log('当前项目地址是：http://%s:%s',server.address().address,server.address().port);
})