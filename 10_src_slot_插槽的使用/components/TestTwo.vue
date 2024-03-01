<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-04 15:48:47
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-04 15:51:10
-->
<template>
  <div>
    <h2>具名插槽</h2>
    <slot name="test2">
      具名插槽，组件使用时 没有传递dom结构时，就显示这段话
    </slot>
    <slot name="test2_1">
      具名插槽，组件使用时 没有传递dom结构时，就显示这段话
    </slot>
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
