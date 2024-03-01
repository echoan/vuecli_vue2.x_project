<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-21 11:38:37
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-21 12:04:43
-->
<template>
  <div>
    <p>propsTwo编号:{{ id }}</p>
    <p>propsTwo标题:{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: ['id', 'title'],
  data() {
    return {}
  },
}
</script>

<style></style>
