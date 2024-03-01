<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-03 20:42:29
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-04 14:55:29
-->
<template>
  <div>
    <h2>默认插槽</h2>
    <slot>这里是默认插槽，组件使用时 没有传递dom结构时，就显示这段话</slot>
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
