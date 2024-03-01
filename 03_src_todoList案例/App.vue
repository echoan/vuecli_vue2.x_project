<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-01-27 11:35:36
 * @LastEditors: Chengya
 * @LastEditTime: 2024-01-30 10:15:35
-->
<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader :todoList="todoList" :addList="addList" />
        <TodoList
          :todoList="todoList"
          :delListItem="delListItem"
          :changeListItem="changeListItem"
        />
        <TodoFooter
          :todoList="todoList"
          :checkAllEvent="checkAllEvent"
          :clearDoneItem="clearDoneItem"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },
  data() {
    return {
      todoList: JSON.parse(localStorage.getItem('todoList')) || [],
    }
  },
  watch: {
    todoList: {
      deep: true,
      handler(newValue, oldValue) {
        console.log(newValue, '====')
        //使用本地存储
        localStorage.setItem('todoList', JSON.stringify(newValue))
      },
    },
  },
  methods: {
    //新增 todolist
    addList(addObj) {
      this.todoList.unshift(addObj)
      console.log(this.todoList, 'this.todoList')
    },
    //删除
    delListItem(id) {
      this.todoList = this.todoList.filter((item) => item.id != id)
      console.log(this.todoList, 'this.todoList')
    },
    //更改
    changeListItem(id) {
      this.todoList = this.todoList.map((it) => {
        if (it.id == id) {
          it.hasFinished = !it.hasFinished
        }
        return it
      })
      console.log(this.todoList, ' this.todoList==')
    },
    //全选或者全不选
    checkAllEvent(checked) {
      this.todoList = this.todoList.map((it) => {
        it.hasFinished = checked
        return it
      })
    },
    //清除已选
    clearDoneItem() {
      this.todoList = this.todoList.filter((item) => !item.hasFinished)
    },
  },
}
</script>

<style>
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
