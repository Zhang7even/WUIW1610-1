var render = function (tpl,data) {
    return tpl.replace(/\{\{\w+\}\}/g,function () {
        // console.log(arguments)
        return data[arguments[1]];
    })
};
console.log(render(content,data));
var content = "<div>{{title}}</div><div><p>{{description}}</p></div>"

var data = {
    title:'概念',
    description:'模板引擎不属于特定技术领域，它是跨领域跨平台的概念。在Asp下有模板引擎，在PHP下也有模板引擎，在C#下也有，甚至JavaScript、WinForm开发都会用到模板引擎技术。'
}