<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-01-27 11:35:36
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-03 11:25:48
-->
<template>
  <div id="app">
    <One />
    <Two />
    <Three />
    <Four />
  </div>
</template>

<script>
import One from './components/One'
import Two from './components/Two.vue'
import Three from './components/Three.vue'
import Four from './components/Four.vue'
export default {
  name: 'App',
  components: {
    One,
    Two,
    Three,
    Four,
  },
  data() {
    return {}
  },
}
</script>
<style></style>
