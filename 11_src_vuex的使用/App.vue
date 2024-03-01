<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-01-27 11:35:36
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-14 17:58:56
-->
<template>
  <div>
    <h2>Vuex的使用</h2>
    <TestOne />
    <TestTwo />
    <TestThree />
  </div>
</template>

<script>
import TestOne from './components/TestOne.vue'
import TestTwo from './components/TestTwo.vue'
import TestThree from './components/TestThree.vue'
export default {
  components: {
    TestOne,
    TestTwo,
    TestThree,
  },
  data() {
    return {}
  },
  mounted() {
    console.log(this, 'App==')
  },
}
</script>

<style></style>
