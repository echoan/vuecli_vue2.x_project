<!--
 * @Author: Chengya
 * @Description: 用过渡来实现同动画同样的效果
 * @Date: 2024-02-03 10:13:05
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-03 10:22:14
-->
<template>
  <div>
    <h2>Vue中的过渡</h2>
    <button type="" @click="changeShow">{{ textMessage }}</button>
    <transition name="two" appear>
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
