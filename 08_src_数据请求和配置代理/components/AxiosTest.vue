<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-03 20:42:29
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-28 21:52:04
-->
<template>
  <div>
    <button type="" @click="requestServer1">请求server1服务器</button>
    <button type="" @click="requestServerTest">请求server2服务器</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {}
  },
  methods: {
    //在不设置代理的情况下 因为浏览器的同源策略问题导致跨域 开发环境中可以通过配置代理服务 来解决
    requestServer1() {
      //不设置代理
      // axios.get('http://localhost:5001/students').then(
      //   (res) => {
      //     console.log(res.data, '请求成功')
      //   },
      //   (err) => {
      //     console.log(err, '请求失败')
      //   },
      // )
      //   配置代理方式一
      // axios.get('http://localhost:8080/students').then(
      //   (res) => {
      //     console.log(res.data, '请求成功')
      //   },
      //   (err) => {
      //     console.log(err, '请求失败')
      //   },
      // )
      //   配置代理方式二
      axios.get('http://localhost:8080/test1/students').then(
        (res) => {
          console.log(res.data, '请求成功')
        },
        (err) => {
          console.log(err, '请求失败')
        },
      )
    },
    requestServerTest() {
      //不设置代理
      // axios.get('http://localhost:5002/cars').then(
      //   (res) => {
      //     console.log(res.data, '请求成功')
      //   },
      //   (err) => {
      //     console.log(err, '请求失败')
      //   },
      // )
      //   配置代理方式一
      //   axios.get('http://localhost:8080/text').then(
      //     (res) => {
      //       console.log(res.data, '请求成功')
      //     },
      //     (err) => {
      //       console.log(err, '请求失败')
      //     },
      //   )
      //   配置代理方式二
      axios.get('http://localhost:8080/test2/cars').then(
        (res) => {
          console.log(res.data, '请求成功')
        },
        (err) => {
          console.log(err, '请求失败')
        },
      )
    },
  },
}
</script>

<style></style>
