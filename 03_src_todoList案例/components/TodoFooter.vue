<!--
 * @Author: Chengya
 * @Description: TodoFooter 组件
 * @Date: 2024-01-29 17:14:30
 * @LastEditors: Chengya
 * @LastEditTime: 2024-01-29 21:33:22
-->
<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll" /> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ doneCount }}</span>
      / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="delDoneItem">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  props: ['todoList', 'checkAllEvent', 'clearDoneItem'],
  data() {
    return {}
  },
  computed: {
    //总量
    total() {
      return this.todoList.length
    },
    //已完成
    doneCount() {
      // const x = this.todoList.reduce((pre, current) => {
      //   console.log('@', pre, current)
      //   return pre + (current.hasFinished ? 1 : 0)
      // }, 0)
      return this.todoList.reduce(
        (pre, current) => pre + (current.hasFinished ? 1 : 0),
        0,
      )
    },
    isAll: {
      get() {
        //解决 当前列表长度为0 时 全选勾选时的问题
        return this.doneCount == this.todoList.length && this.total
      },
      set(value) {
        console.log(value, 'value')
        this.checkAllEvent(value)
      },
    },
  },
  methods: {
    // checkAll(e) {
    //   console.log(e.target.checked)
    //   this.checkAllEvent(e.target.checked)
    // },

    delDoneItem() {
      this.clearDoneItem()
    },
  },
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
