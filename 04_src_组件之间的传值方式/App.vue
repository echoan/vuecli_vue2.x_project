<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-01-27 11:35:36
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-02 11:27:17
-->
<template>
  <div id="app">
    <!-- 通过父组件给子组件传递函数类型的props实现:子给父传递数据 -->
    <TestOne :changeStudent_01="changeStudentInfo" :student="student" />
    <!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递数据 使用v-on -->
    <TestTwo
      :student="student"
      @changeStudent_02.once="changeStudentInfo"
      @click.native="testClick"
    />
    <!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递数据 使用 ref-->
    <TestThree :student="student" ref="testThree" />
    <!-- 使用事件总线的方式通信 -->
    <TestFour />
    <TestFive />
    <!-- 使用消息订阅发布来通信 -->
    <TestSix />
    <TestSeven />
  </div>
</template>

<script>
import TestOne from './components/TestOne'
import TestTwo from './components/TestTwo'
import TestThree from './components/TestThree'
import TestFour from './components/TestFour'
import TestFive from './components/TestFive'
import TestSix from './components/TestSix'
import TestSeven from './components/TestSeven'
export default {
  components: {
    TestOne,
    TestTwo,
    TestThree,
    TestFour,
    TestFive,
    TestSix,
    TestSeven,
  },
  data() {
    return {
      student: {
        name: 'tom',
        age: 20,
      },
    }
  },
  methods: {
    //多参数 传参时的情况
    changeStudentInfo(obj, ...argument) {
      console.log(argument, 'argument======')
      this.student = obj
    },
    testClick() {
      console.log('hello,world,这里是组件上绑定的原生事件')
    },
  },
  mounted() {
    //通过 this.$refs.xxx.$on 方式 添加 优势 在于比较灵活
    setTimeout(() => {
      this.$refs.testThree.$on('changeStudent_03', this.changeStudentInfo)
    }, 5000)
    // this.$refs.testThree.$once('changeStudent_03', this.changeStudentInfo) 事件只触发一次 （once 关键字）
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
