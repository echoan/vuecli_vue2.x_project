<!--
 * @Author: Chengya
 * @Description: 配合演示 plugins.js 相关内容
 * @Date: 2024-01-28 11:10:11
 * @LastEditors: Chengya
 * @LastEditTime: 2024-01-28 14:06:35
-->
<template>
  <div class="student">
    <h2>组件名称:{{ title | mySlice }}</h2>
    <h2>
      数量
      <span v-1000big="count"></span>
    </h2>
    <h2>{{ x }}</h2>
    <h2>{{ y }}</h2>
    <button type="" @click="usePluginEvent">使用plugins 中的方法</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '学生组件888',
      count: 100,
    }
  },
  methods: {
    usePluginEvent() {
      this.say()
    },
  },
}
</script>
<style lang="less" scoped>
.student {
  color: red;
}
</style>
