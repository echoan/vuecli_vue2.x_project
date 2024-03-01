/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-01-27 11:35:36
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-28 21:50:27
 */
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // pages: {
  //   index: {
  //     //入口文件的配置 将 入口文件 修改为其他文件 不修改的话 默认是 main.js
  //     entry: "src/main.js",
  //   },
  // },
  lintOnSave: false, //关闭语法检查
  // 配置代理方式一
  // devServer: {
  //   proxy: "http://localhost:5001",
  // },
  // 配置代理方式二
  devServer: {
    proxy: {
      "/test1": {
        target: "http://localhost:5001",
        pathRewrite: { "^/test1": "" },
        changeOrigin: true,
      },
      "/test2": {
        target: "http://localhost:5002",
        pathRewrite: { "^/test2": "" },
        changeOrigin: true,
      },
    },
  },
});
