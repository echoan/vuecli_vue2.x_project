<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-20 22:41:32
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-01 14:37:24
-->
<template>
  <div>
    <div :style="{ opacity: currentOpacity }">
      hello world
    </div>
    <ul>
      <li v-for="(item, index) in newsList" :key="item.id">
        <!-- params 传参 -->
        <!-- 拼接字符串形式 -->
        <!-- <router-link :to="`/home/news/newsdetail/${item.id}/${item.title}`">
          {{ item.title }}
        </router-link> -->
        <!-- 对象形式 需要配合命名路由 使用 不能使用path 否则不生效 -->
        <!-- <router-link
          :to="{
            path: '/home/news/newsdetail',
            params: {
              id: item.id,
              title: item.title,
            },
          }"
        >
          {{ item.title }}
        </router-link> -->
        <router-link
          :to="{
            name: 'newsdetail',
            params: {
              id: item.id,
              title: item.title,
            },
          }"
        >
          {{ item.title }}
        </router-link>
        <input type="" name="" value="" />
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      currentOpacity: 1,
      newsList: [
        { id: '001', title: '下雪了' },
        { id: '002', title: '大地一片白茫茫' },
        { id: '003', title: '大家快来出来玩啊' },
      ],
    }
  },
  //路由组件被激活时 开启定时器
  activated() {
    this.timer = setInterval(() => {
      console.log('this.timer is starting')
      this.currentOpacity -= 0.01
      if (this.currentOpacity <= 0) {
        this.currentOpacity = 1
      }
    }, 10)
  },
  //路由组件失活时 关掉定时器
  deactivated() {
    clearInterval(this.timer)
  },
  beforeRouteEnter(to, from, next) {
    if (to.meta.isAuth) {
      if (localStorage.getItem('address') == '北京') {
        alert('当前地址为北京，不能查看news页面')
        //next()
      } else {
        next()
      }
    } else {
      next()
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log('路由切出时触发')
    next()
  },
}
</script>

<style></style>
