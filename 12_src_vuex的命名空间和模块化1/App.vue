<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-01-27 11:35:36
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-28 23:21:33
-->
<template>
  <div class="app">
    <h2>Vuex的命名空间和模块化-引</h2>
    <Count />
    <hr />
    <Person />
  </div>
</template>

<script>
import Count from './components/Count.vue'
import Person from './components/Person.vue'
export default {
  components: {
    Count,
    Person,
  },
  data() {
    return {}
  },
  mounted() {
    console.log(this, 'App==')
  },
}
</script>

<style>
.app {
  padding-left: 50px;
}
</style>
