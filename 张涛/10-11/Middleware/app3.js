var express=require('express');
var app=express();
var fs=require('fs');
//中央发补助10000；
// 省里-4000
// 市里-2000
// 县里-2000
// 乡里-1000
// 村里-500
// 农民500
app.use(function (req,res,next) {
    //中央
    req.money=10000;
    console.log('中央')
    next();
})
app.use(function (req,res,next) {
    //省里
    req.money=req.money-4000;
    console.log('省里')
    next();
})
app.use(function (req,res,next) {
    //市里
    req.money=req.money-2000;
    console.log('市里')
    next();
})
app.use(function (req,res,next) {
    //县里
    req.money=req.money-2000;
    console.log('县里')
    next();
})
app.use(function (req,res,next) {
    //乡里
    req.money=req.money-1000;
    console.log('乡里')
    next();
})
app.use(function (req,res,next) {
    //村里
    req.money=req.money-500;
    console.log('村里')
    next();
})
app.get("/",function (req,res) {
    res.send(req.money.toString());
})
var server=app.listen(8000,'localhost',function(){
    console.log('express已启动');
    console.log('http://%s:%s',server.address().address,server.address().port);
})