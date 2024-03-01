<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-03 11:23:29
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-03 11:29:19
-->
<template>
  <div>
    <h2>Vue中的使用 animate.css 动画</h2>
    <button type="" @click="changeShow">{{ textMessage }}</button>
    <transition
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__backInLeft"
      leave-active-class="animate__backOutLeft"
    >
      <h3 v-show="isShow" :key="1">hello world</h3>
    </transition>
  </div>
</template>

<script>
import 'animate.css'
export default {
  data() {
    return {
      textMessage: '隐藏',
      isShow: true,
    }
  },
  methods: {
    changeShow() {
      this.isShow = !this.isShow
      if (this.isShow) {
        this.textMessage = '隐藏'
      } else {
        this.textMessage = '显示'
      }
    },
  },
}
</script>
<style scoped>
h3 {
  background: orange;
}
</style>
