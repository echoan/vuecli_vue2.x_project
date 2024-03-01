<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-01-30 10:20:33
 * @LastEditors: Chengya
 * @LastEditTime: 2024-01-31 17:05:42
-->
<template>
  <div>
    <div>学生姓名-{{ student.name }}</div>
    <div>学生年龄-{{ student.age }}</div>
    <button type="" @click="changeStudent">更改学生--方式二</button>
    <button type="" @click="destroyCurrentComponent">
      销毁组件以监测原生事件或者自定义事件的触发情况
    </button>
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
      this.$emit('changeStudent_02', { name: '韩梅梅', age: 19 }, 100, 200)
    },
    destroyCurrentComponent() {
      this.$destroy()
    },
  },
}
</script>

<style></style>
