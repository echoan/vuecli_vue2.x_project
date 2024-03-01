<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-01-30 10:20:33
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-28 15:23:59
-->
<template>
  <div>
    <div>学生姓名-{{ student.name }}</div>
    <div>学生年龄-{{ student.age }}</div>
    <button type="" @click="changeStudent">更改学生--方式一</button>
    <hr />
  </div>
</template>

<script>
export default {
  props: ['student', 'changeStudent_01'],
  data() {
    return {}
  },
  methods: {
    changeStudent() {
      this.changeStudent_01({ name: '李雷', age: 18 })
    },
  },
}
</script>

<style></style>
