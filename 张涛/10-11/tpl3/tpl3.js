var express = require("express");
var app = express();

app.set("views","./views");
app.set("view engine","ejs");

app.get("/",function (req,res) {
    res.render('index', { title: '测试', h1: '这是一个测试文档 ',description:'模板引擎（这里特指用于Web开发的模板引擎）是为了使用户界面与业务数据（内容）分离而产生的，它可以生成特定格式的文档，用于网站的模板引擎就会生成一个标准的HTML文档。',keywords:'<em>关键字</em>',list:[1,2,3,'a','b','c']});
}).listen(400)

