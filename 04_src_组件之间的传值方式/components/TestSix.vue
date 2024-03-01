<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-02 11:05:32
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-28 16:36:08
-->
<template>
  <div>
    <h2>组件TestSix</h2>
    <h2>这里显示从组件TestSeven 中传递来的值-----{{ currentMessage }}</h2>
    <button type="" @click="destroyEvent">
      点击这里销毁组件 同时 解绑消息订阅
    </button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  data() {
    return {
      currentMessage: '',
    }
  },
  methods: {
    changeCurrentMessage(subscribeName, data) {
      console.log(subscribeName, data)
      this.currentMessage = data
    },
    destroyEvent() {
      this.$destroy()
    },
  },
  mounted() {
    this.pubid = pubsub.subscribe('Message', this.changeCurrentMessage)
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubid)
  },
}
</script>

<style></style>
