<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-03 11:08:35
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-03 11:09:55
-->
<template>
  <div>
    <h2>Vue中的过渡-transition-group</h2>
    <button type="" @click="changeShow">{{ textMessage }}</button>
    <transition-group name="two" appear>
      <h3 v-show="isShow" :key="1">hello world</h3>
      <h3 v-show="!isShow" :key="2">你好，世界</h3>
    </transition-group>
  </div>
</template>

<script>
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
  /* transition: 1s linear; */
}
.two-enter {
  transform: translateX(-100%);
}
.two-enter-to {
  transform: translateX(0px);
}
.two-leave {
  transform: translateX(0px);
}
.two-leave-to {
  transform: translateX(-100%);
}
.two-enter-active,
.two-leave-active {
  transition: 1s linear;
}
</style>
