<!--
 * @Author: Chengya
 * @Description: TodoList 组件
 * @Date: 2024-01-29 17:13:44
 * @LastEditors: Chengya
 * @LastEditTime: 2024-01-29 21:08:09
-->
<template>
  <ul class="todo-main">
    <ListItem
      v-for="(itemObj, index) in todoList"
      :key="itemObj.id"
      :itemObj="itemObj"
    />
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
</style>
