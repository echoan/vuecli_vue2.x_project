<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-04 16:16:32
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-04 16:24:21
-->
<template>
  <div>
    <h2>作用域插槽</h2>
    <slot name="test3" :list="list" :myCar="myCar">
      具名插槽，组件使用时 没有传递dom结构时，就显示这段话
    </slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ['奔驰', '宝马', '奥迪'],
      myCar: '奔驰',
    }
  },
}
</script>

<style></style>
