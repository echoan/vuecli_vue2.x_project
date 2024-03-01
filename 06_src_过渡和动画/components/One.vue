<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-02 16:21:50
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-03 10:20:58
-->
<template>
  <div>
    <h2>Vue中的动画</h2>
    <button type="" @click="changeShow">{{ textMessage }}</button>
    <transition name="hello" appear>
      <h3 v-show="isShow">hello world</h3>
    </transition>
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
}
/* .v-enter-active {
  animation: myAction 1s linear;
}
.v-leave-active {
  animation: myAction 1s linear reverse;
} */
.hello-enter-active {
  animation: myAction 1s linear;
}
.hello-leave-active {
  animation: myAction 1s linear reverse;
}
@keyframes myAction {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
