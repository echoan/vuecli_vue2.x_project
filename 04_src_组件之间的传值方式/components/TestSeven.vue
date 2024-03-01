<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-02 11:05:44
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-28 16:39:31
-->
<template>
  <div>
    <h2>组件TestSeven</h2>
    <h2>{{ message }}</h2>
    <h2>使用消息的订阅发布来实现组件通信</h2>
    <button type="" @click="pubEvent">
      点击通过消息订阅发布模式将TestSeven信息传给TestSix
    </button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  data() {
    return {
      message: '这里是TestSeven组件中的数据',
    }
  },
  methods: {
    pubEvent() {
      pubsub.publish('Message', this.message)
    },
  },
}
</script>

<style></style>
