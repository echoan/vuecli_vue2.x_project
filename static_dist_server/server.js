/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-22 15:03:57
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-22 15:27:55
 */
const express = require("express");
const history = require("connect-history-api-fallback");
const app = express();
app.use(history()); //解决history 模式下 页面刷新 404 的问题
// 配置访问当前服务器 static 的静态资源
app.use(express.static(__dirname + "/static"));
app.get("/test", (req, res) => {
  res.send({
    address: "北京",
    age: 30,
  });
});

//测试 运行后 http://localhost:5050/test

app.listen(5050, (err) => {
  if (!err) {
    console.log("服务器已经在运行");
  }
});
