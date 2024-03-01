<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-14 17:56:29
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-14 18:16:02
-->
<template>
  <div>
    <hr />
    <h2>mapActions 和 mapMutations 的使用</h2>
    <h3>当前求和为{{ $store.state.sum }}</h3>
    <h3>使用getters放大和100倍{{ $store.getters.bigSum }}</h3>
    <select v-model="currentValue">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button type="" class="btn" @click="add(currentValue)">+</button>
    <button type="" class="btn" @click="unadd(currentValue)">-</button>
    <button type="" class="btn" @click="oddAdd(currentValue)">
      当前和为偶数再加
    </button>
    <button type="" class="btn" @click="addDelay(currentValue)">
      等一等再加
    </button>
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
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
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
    // add() {
    //   //this.$store.dispatch('add', this.currentValue)
    //   //因为没有业务逻辑 也可以直接调用 this.$store.commit('ADD',value)
    //   this.$store.commit('ADD', this.currentValue)
    // },
    // unadd() {
    //   //this.$store.dispatch('unadd', this.currentValue)
    //   //因为没有业务逻辑 也可以直接调用 this.$store.commit('UNADD',value)
    //   this.$store.commit('UNADD', this.currentValue)
    // },
    //使用 mapMutations 来 简化代码 add  和 unadd
    ...mapMutations({ add: 'ADD', unadd: 'UNADD' }),
    //或者 当 绑定事件时的方法名 和 定义在store 的 mutations 中的方法名一致的话 可以写成数组形式
    // oddAdd() {
    //   this.$store.dispatch('oddadd', this.currentValue)
    // },
    // addDelay() {
    //   this.$store.dispatch('delayadd', this.currentValue)
    // },
    //使用 mapActions 来简化代码  oddAdd 和  addDelay
    ...mapActions({ oddAdd: 'oddadd', addDelay: 'delayadd' }),
  },
}
</script>

<style scoped>
.btn {
  margin-left: 10px;
}
</style>
