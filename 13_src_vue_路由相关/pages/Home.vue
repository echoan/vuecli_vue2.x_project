<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-19 11:59:34
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-01 14:26:01
-->
<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/news"
          >
            News
          </router-link>
        </li>
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/message"
          >
            Message
          </router-link>
        </li>
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/propsone"
          >
            props 形式一
          </router-link>
        </li>
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/propstwo"
          >
            props 形式二
          </router-link>
        </li>
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/propsthree"
          >
            props 形式三
          </router-link>
        </li>
      </ul>
      <div>
        <keep-alive :include="['News', 'Message']">
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  beforeDestroy() {
    console.log('home组件即将销毁')
  },
  mounted() {
    console.log('home组件挂载完成')
  },
}
</script>

<style></style>
