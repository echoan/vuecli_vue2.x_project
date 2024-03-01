<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-21 11:38:55
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-01 14:09:16
-->
<template>
  <div>
    <p>propsThree编号:{{ id }}</p>
    <p>propsThree标题:{{ title }}</p>
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
