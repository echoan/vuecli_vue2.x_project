<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-01-27 11:35:36
 * @LastEditors: Chengya
 * @LastEditTime: 2024-01-28 11:18:57
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <School
      ref="mySchool"
      :schoolName="schoolName"
      :schoolAddress="schoolAddress"
      :editName="editName"
    />
    <div>
      <button type="" @click="getContentByRef" ref="myBtn">
        通过ref获取dom和组件实例
      </button>
    </div>
    <div>
      <h2>学生组件</h2>
      <Student />
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import School from './components/School'
import Student from './components/Student'

export default {
  name: 'App',
  components: {
    HelloWorld,
    School,
    Student,
  },
  data() {
    return {
      schoolName: '中国科学院大学',
      schoolAddress: '北京',
    }
  },
  methods: {
    getContentByRef() {
      console.log(this.$refs.myBtn, 'myBtn')
      console.log(this.$refs.mySchool, 'mySchool')
    },
    editName() {
      this.schoolName = '清华大学'
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
