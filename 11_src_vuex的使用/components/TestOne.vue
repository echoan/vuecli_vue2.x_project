<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-07 14:14:39
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-07 14:28:37
-->
<template>
  <div>
    <h2>计算案例-不使用Vuex 版</h2>
    <h3>当前求和为{{ total }}</h3>
    <select v-model="currentValue">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button type="" class="btn" @click="add">+</button>
    <button type="" class="btn" @click="unadd">-</button>
    <button type="" class="btn" @click="oddAdd">当前和为偶数再加</button>
    <button type="" class="btn" @click="addDelay">等一等再加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentValue: 1,
      total: 0,
    }
  },
  methods: {
    add() {
      this.total += this.currentValue
    },
    unadd() {
      this.total -= this.currentValue
    },
    oddAdd() {
      if (this.total % 2) {
        return false
      }
      this.add()
    },
    addDelay() {
      setTimeout(() => {
        this.add()
      }, 2000)
    },
  },
}
</script>

<style scoped>
.btn {
  margin-left: 10px;
}
</style>
