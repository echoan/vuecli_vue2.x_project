<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-20 22:42:18
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-01 14:25:51
-->
<template>
  <div>
    <ul>
      <li v-for="(item, index) in messageList" :key="item.id">
        <!-- query 传参 -->
        <!-- 拼接字符串形式 -->
        <!-- <router-link
          :to="`/home/message/detail?id=${item.id}&title=${item.title}`"
        >
          {{ item.title }}
        </router-link> -->
        <!-- 对象形式 -->
        <!-- <router-link
          :to="{
            path: '/home/message/detail',
            query: {
              id: item.id,
              title: item.title,
            },
          }"
        >
          {{ item.title }}
        </router-link> -->
        <!-- 对象形式 变形  注意name， 同时注意 配置路由规则时 为路由组件 添加 name 属性 -->
        <router-link
          :to="{
            name: 'detail',
            query: {
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
  name: 'Message',
  data() {
    return {
      messageList: [
        { id: '001', title: '你好世界' },
        { id: '002', title: 'hello world' },
        { id: '003', title: '啦啦啦啦' },
      ],
    }
  },
}
</script>

<style></style>
