<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-21 11:38:18
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-21 11:54:36
-->
<template>
  <div>
    <div>住址:{{ address }}</div>
    <div>年龄:{{ age }}</div>
  </div>
</template>

<script>
export default {
  props: ['address', 'age'],
  data() {
    return {}
  },
}
</script>

<style></style>
