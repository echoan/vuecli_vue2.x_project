<!--
 * @Author: Chengya
 * @Description: ListItem
 * @Date: 2024-01-29 17:39:37
 * @LastEditors: Chengya
 * @LastEditTime: 2024-01-29 21:08:30
-->
<template>
  <li>
    <label>
      <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
      <!-- <input type="checkbox" v-model="todo.done"/> -->
      <input
        type="checkbox"
        :checked="itemObj.hasFinished"
        @change="changeItem(itemObj.id)"
      />
      <span>{{ itemObj.title }}</span>
    </label>
    <button class="btn btn-danger" @click="delItem(itemObj.id)">删除</button>
  </li>
</template>

<script>
export default {
  props: ['itemObj', 'delListItem', 'changeListItem'],
  data() {
    return {}
  },
  methods: {
    delItem(id) {
      console.log(id, 'id==')
      this.delListItem(id)
    },
    changeItem(id) {
      console.log(id, 'id==')
      this.changeListItem(id)
    },
  },
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>
