<!--
 * @Author: Chengya
 * @Description: 计算案例 使用vuex
 * @Date: 2024-02-07 16:08:51
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-14 17:21:04
-->
<template>
  <div>
    <h2>计算案例-使用Vuex 版</h2>
    <h3>当前求和为{{ $store.state.sum }}</h3>
    <h3>使用getters放大和100倍{{ $store.getters.bigSum }}</h3>
    <select v-model="currentValue">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button type="" class="btn" @click="add">+</button>
    <button type="" class="btn" @click="unadd">-</button>
    <button type="" class="btn" @click="oddAdd">当前和为偶数再加</button>
    <button type="" class="btn" @click="addDelay">等一等再加</button>
    <hr />
    <h2>mapState 和 mapGetters 的使用</h2>
    <div>
      <h3>sum 放大100倍 {{ bigSum }}</h3>
      <h3>学校名:{{ name }}</h3>
      <h3>学校地址:{{ address }}</h3>
    </div>
    <hr />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      currentValue: 1,
    }
  },
  computed: {
    //...mapState({ name: 'name', address: 'address' }),
    //或者
    ...mapState(['name', 'address']),
    //...mapGetters({ bigSum: 'bigSum' }),
    ...mapGetters(['bigSum']),
  },
  methods: {
    add() {
      //this.$store.dispatch('add', this.currentValue)
      //因为没有业务逻辑 也可以直接调用 this.$store.commit('ADD',value)
      this.$store.commit('ADD', this.currentValue)
    },
    unadd() {
      //this.$store.dispatch('unadd', this.currentValue)
      //因为没有业务逻辑 也可以直接调用 this.$store.commit('UNADD',value)
      this.$store.commit('UNADD', this.currentValue)
    },
    oddAdd() {
      this.$store.dispatch('oddadd', this.currentValue)
    },
    addDelay() {
      this.$store.dispatch('delayadd', this.currentValue)
    },
  },
}
</script>

<style scoped>
.btn {
  margin-left: 10px;
}
</style>
