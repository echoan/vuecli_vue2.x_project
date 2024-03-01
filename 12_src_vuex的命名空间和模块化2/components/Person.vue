<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-28 23:47:44
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-29 00:19:44
-->
<template>
  <div>
    <h2>人员列表</h2>
    <h3>text:{{ text }}</h3>
    <h3>currentText:{{ currentText }}</h3>
    <h3>当前的求和为:{{ sum }}</h3>
    <input type="" name="" v-model="name" />
    <button type="" @click="addName">添加</button>
    <button type="" @click="addChengName">添加一个姓程的人名</button>
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
      return this.$store.state.aboutName.personList
    },
    text() {
      return this.$store.state.aboutName.text
    },
    sum() {
      return this.$store.state.aboutCount.sum
    },
    currentText() {
      return this.$store.getters['aboutName/currentText']
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
      this.$store.commit('aboutName/ADDNAME', newPerson)
      this.name = ''
    },
    addChengName() {
      if (!this.name.trim()) {
        return false
      }
      let newPerson = {
        name: this.name,
        id: nanoid(),
      }
      this.$store.dispatch('aboutName/addChengName', newPerson)
      this.name = ''
    },
  },
}
</script>

<style></style>
