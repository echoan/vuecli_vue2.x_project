<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-22 15:00:57
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-22 15:30:11
-->

# 打包后的资源存放的服务器 通过服务器来访问 打包后的资源 配合 12_src vue 路由相关

1. 创建文件夹 static_dist_server 在该文件夹执行 npm init 进行初始化
2. 安装 express npm i express
3. 新建文件 server.js
4. 打开对应端口地址 访问测试接口，返回预定内容便成功搭建起一个微型服务器。
5. 为了能够使服务器能够访问静态资源 添加 static 目录，并且 在 server.js 中 添加 app.use(express.static(\_\_dirname + "/static"));
6. 将打包好的静态资源 放在 static 中， 访问对应端口地址即可访问打包后的资源。
7. 为了解决 history 模式下 页面刷新的 404 问题，需要后端支持，在 node.js 中 可以借用 connect-history-api-fallback 来解决这个问题。
   安装 npm i connect-history-api-fallback
   server.js 中引入 const history = require('connect-history-api-fallback')
   在 app.use(express.static(\_\_dirname + "/static"))之前 使用 app.use(history) ;
