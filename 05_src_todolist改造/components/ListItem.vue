<!--
 * @Author: Chengya
 * @Description: ListItem
 * @Date: 2024-01-29 17:39:37
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-02 15:26:16
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
      <span v-show="!itemObj.isEdit">{{ itemObj.title }}</span>
      <input
        type=""
        name=""
        :value="itemObj.title"
        v-show="itemObj.isEdit"
        ref="myInput"
        @blur="inputBlur(itemObj, $event)"
      />
    </label>
    <button class="btn btn-danger" @click="delItem(itemObj.id)">删除</button>
    <button
      class="btn btn-edit"
      @click="editItem(itemObj)"
      v-show="!itemObj.isEdit"
    >
      编辑
    </button>
  </li>
</template>

<script>
export default {
  props: ['itemObj'],
  data() {
    return {
      show: false,
    }
  },
  methods: {
    delItem(id) {
      console.log(id, 'id==')
      // this.delListItem(id)
      this.$bus.$emit('delListItem', id)
    },
    changeItem(id) {
      console.log(id, 'id==')
      // this.changeListItem(id)
      this.$bus.$emit('changeListItem', id)
    },
    editItem(itemObj) {
      if (itemObj.hasOwnProperty('isEdit')) {
        itemObj.isEdit = true
      } else {
        // 为对象添加一个初始化时并不存在的属性，为了使添加的属性有setter,getter方法,需要做如下处理
        this.$set(itemObj, 'isEdit', true)
      }
      //点击编辑后 让 输入框 激活
      this.$nextTick(() => {
        this.$refs.myInput.focus()
      })
    },
    inputBlur(itemObj, e) {
      if (!e.target.value.trim()) {
        return alert('输入不能为空！')
      }
      let newItemObj = {
        ...itemObj,
        isEdit: false,
        title: e.target.value,
      }
      this.$bus.$emit('updateTodoList', newItemObj)
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
