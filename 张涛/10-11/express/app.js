var express = require("express");

var app = express();

// 路由路径
//     路由路径和请求方法一起定义了请求的端点，它可以是字符串、字符串模式或者正则表达式。



// app.get('/ab?cd', function(req, res) {
//     res.send('ab?cd');
// });





// 路由句柄 (函数、函数数组、混合(数组、数组))
//     使用多个回调函数处理路由（记得指定 next 对象）：
// app.get("/",function (req,res,next) {
//     console.log("第一个函数");
//     next(); //
//
// },function (rew,res) {
//     console.log("第二个函数");
//     res.end("hello word")
//
// })



var cb0 = function (req, res, next) {
    console.log('CB0');
    next();
}

var cb1 = function (req, res, next) {
    console.log('CB1');
    next();
}

var cb2 = function (req, res) {
    res.send('Hello from C!');
}

app.get('/', [cb0, cb1, cb2]);



app.listen(88);