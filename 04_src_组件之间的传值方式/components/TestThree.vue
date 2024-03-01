<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-01-30 10:20:33
 * @LastEditors: Chengya
 * @LastEditTime: 2024-01-31 16:55:42
-->
<template>
  <div>
    <div>学生姓名-{{ student.name }}</div>
    <div>学生年龄-{{ student.age }}</div>
    <button type="" @click="changeStudent">更改学生--方式三</button>
    <button type="" @click="unindEvent">解绑自定义事件</button>
    <hr />
  </div>
</template>

<script>
export default {
  props: ['student'],
  data() {
    return {}
  },
  methods: {
    changeStudent() {
      this.$emit('changeStudent_03', { name: '王涛', age: 21 })
    },
    unindEvent() {
      this.$off('changeStudent_03')
    },
  },
}
</script>

<style></style>
