<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-14 17:56:29
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-28 23:56:49
-->
<template>
  <div>
    <h3>当前求和为{{ sum }}</h3>
    <h3>使用getters放大和100倍{{ bigSum }}</h3>
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
    <div>
      <h3>学校名:{{ name }}</h3>
      <h3>学校地址:{{ address }}</h3>
      <h3>当前的人员数量:{{ personList.length }}</h3>
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
    //开启命名空间后 通过  mapState 和 各自对应的命名空间获取数据
    ...mapState('aboutCount', ['sum', 'name', 'address']),
    ...mapState('aboutName', ['personList']),
    //同理
    ...mapGetters('aboutCount', ['bigSum']),
  },
  methods: {
    //使用 mapMutations 和 命名空间 来 执行对应操作
    ...mapMutations('aboutCount', { add: 'ADD', unadd: 'UNADD' }),
    //同理
    ...mapActions('aboutCount', { oddAdd: 'oddadd', addDelay: 'delayadd' }),
  },
}
</script>

<style scoped>
.btn {
  margin-left: 10px;
}
</style>
