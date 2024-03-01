<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-28 23:15:28
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-28 23:29:31
-->
<template>
  <div>
    <h2>人员列表</h2>
    <h3>当前的求和为:{{ sum }}</h3>
    <input type="" name="" v-model="name" />
    <button type="" @click="addName">添加</button>
    <ul>
      <li v-for="(it, index) in personList" :key="it.id">{{ it.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
  data() {
    return {
      name: '',
    }
  },
  computed: {
    personList() {
      return this.$store.state.personList
    },
    sum() {
      return this.$store.state.sum
    },
  },
  methods: {
    addName() {
      if (!this.name.trim()) {
        return false
      }
      let newPerson = {
        name: this.name,
        id: nanoid(),
      }
      this.$store.commit('ADD_PERSON', newPerson)
      this.name = ''
    },
  },
}
</script>

<style></style>
