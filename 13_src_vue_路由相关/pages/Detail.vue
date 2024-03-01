<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-20 23:04:45
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-20 23:19:49
-->
<template>
  <div>
    <p>消息编号:{{ this.$route.query.id }}</p>
    <p>消息标题:{{ this.$route.query.title }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style></style>
