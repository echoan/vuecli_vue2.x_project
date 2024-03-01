<!--
 * @Author: Chengya
 * @Description: TodoHeader 组件
 * @Date: 2024-01-29 17:12:55
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-02 14:06:59
-->
<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="title"
      @keyup.enter="addTitle"
    />
  </div>
</template>
<script>
import { nanoid } from 'nanoid'
export default {
  props: ['addList'],
  data() {
    return {
      title: '',
    }
  },
  methods: {
    addTitle() {
      //解决title为空字符串时 添加的问题
      if (!this.title.trim()) {
        return false
      }
      this.addList({
        id: nanoid(),
        title: this.title,
        hasFinished: false,
      })
      this.title = ''
    },
  },
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
