<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-01 12:38:37
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-01 12:44:45
-->
<template>
  <div>
    <h2>全局事件总线（Bus传值）演示</h2>
    <div>接收到来自TestFour组件中的数据------{{ currentText }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentText: '',
    }
  },
  methods: {
    changeCurrentText(text) {
      this.currentText = text
    },
  },
  mounted() {
    this.$bus.$on('busTransferMethod', this.changeCurrentText)
  },
}
</script>

<style></style>
