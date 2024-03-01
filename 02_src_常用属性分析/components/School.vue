<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-01-27 22:09:36
 * @LastEditors: Chengya
 * @LastEditTime: 2024-01-28 10:35:14
-->
<template>
  <div>
    <h2>学校名字:{{ this.schoolName }}</h2>
    <h2>学校地址:{{ this.currentSchoolAddress }}</h2>
    <button type="" @click="editAddress">修改地址方式</button>
    <button type="" @click="editSchoolName">修改学校名字</button>
    <button type="" @click="mixUse">使用局部的混入</button>
  </div>
</template>

<script>
import { myFirstMixin } from '../mixin'
export default {
  name: 'School',
  props: {
    schoolName: {
      type: String,
      required: true,
    },
    schoolAddress: {
      type: String,
      default: '中国',
    },
    editName: {
      type: Function,
      default: null,
    },
  },
  //局部使用混入
  mixins: [myFirstMixin],
  data() {
    return {
      currentSchoolAddress: this.schoolAddress,
      currentTitle: '学校组件',
    }
  },
  methods: {
    editAddress() {
      this.currentSchoolAddress = '上海'
    },
    editSchoolName() {
      this.editName()
    },
    mixUse() {
      //使用混入的方法
      this.printText()
    },
  },
  mounted() {
    console.log('这里是school组件的mounted')
  },
}
</script>

<style></style>
