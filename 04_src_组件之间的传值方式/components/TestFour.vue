<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-01 12:33:49
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-01 12:38:26
-->
<template>
  <div>
    <h2>全局事件总线（Bus传值）演示</h2>
    <div>
      <button type="" @click="transferDataEvent">
        在TestFour组件中向TestFive组件中通信
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '这里是组件TestFour的数据',
    }
  },
  methods: {
    transferDataEvent() {
      this.$bus.$emit('busTransferMethod', this.message)
    },
  },
}
</script>

<style></style>
