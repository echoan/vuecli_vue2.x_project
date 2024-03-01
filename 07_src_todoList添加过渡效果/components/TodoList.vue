<!--
 * @Author: Chengya
 * @Description: TodoList 组件
 * @Date: 2024-01-29 17:13:44
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-03 11:39:34
-->
<template>
  <ul class="todo-main">
    <transition-group name="todoList" appear>
      <ListItem
        v-for="(itemObj, index) in todoList"
        :key="itemObj.id"
        :itemObj="itemObj"
      />
    </transition-group>
  </ul>
</template>

<script>
import ListItem from './ListItem.vue'

export default {
  components: {
    ListItem,
  },
  props: ['todoList'],
  data() {
    return {}
  },
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
.todoList-enter {
  transform: translateX(100%);
}
.todoList-enter-to {
  transform: translateX(0px);
}
.todoList-leave {
  transform: translateX(0px);
}
.todoList-leave-to {
  transform: translateX(100%);
}
.todoList-enter-active,
.todoList-leave-active {
  transition: 1s linear;
}
</style>
