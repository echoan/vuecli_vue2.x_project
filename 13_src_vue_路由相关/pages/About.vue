<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-14 17:56:29
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-20 22:22:19
-->
<template>
  <div>
    <h2>我是About的内容</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  beforeDestroy() {
    console.log('about组件即将销毁')
  },
  mounted() {
    console.log('about组件挂载完成')
  },
}
</script>

<style></style>
