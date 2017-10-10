var http=require("http");
var fs=require("fs");
var url=require("url");
var qs=require("querystring");
var users=[];
var server=http.createServer(function(req,res){
    var u=url.parse(req.url);
    if(req.url=='/favicon.ico'){
        res.end();
        return;
    }
    if(u.pathname=='/'||u.pathname=='/index.html'){
        fs.readFile('./index.html',function (err,data) {
            res.write(data);
            res.end();
        })
        return;
    }
    if(u.pathname=='/login'){
        var data=""
        req.on('data',function(d){
            // console.log(d.toString())
            data+=d;
        });
        req.on('end',function(){
            users.push(qs.parse(data));
            res.end('注册成功');
            console.log(users);
        })

    }
});
server.listen(88,"127.0.0.1",function () {
    console.log("服务器已开启..."+ "http://"+server.address().address+":"+server.address().port)
});