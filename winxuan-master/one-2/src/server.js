// 1-安装express：npm i express
// 2-引入express
const express = require("express");

// 3-创建一个服务器
const app = express();
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// 4-创建一个静态资源服务器
app.use(express.static('./'));

// 引入index.js（可以省略,默认会找index.js）
const index = require("../router");

// 路由规则：app.use(path,callback)
// 进入子路由
app.use(index);

// 5-启动服务器
app.listen(1910, function () {
    console.log("服务器连接成功");
})