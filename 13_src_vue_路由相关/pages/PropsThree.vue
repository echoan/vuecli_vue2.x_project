<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-21 11:38:45
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-01 14:22:42
-->
<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-21 11:38:25
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-21 12:02:19
-->
<template>
  <div>
    <ul>
      <li v-for="(item, index) in propsThreeList" :key="item.id">
        <!-- 对象形式  params-->
        <!-- <router-link
          :to="{
            name: 'propsthreedetail',
            params: {
              id: item.id,
              title: item.title,
            },
          }"
        >
          {{ item.title }}
        </router-link> -->
        <!-- 对象形式  query-->
        <router-link
          :to="{
            name: 'propsthreedetail',
            query: {
              id: item.id,
              title: item.title,
            },
          }"
        >
          {{ item.title }}
        </router-link>
        <button type="" @click="pushEvent(item)">编程式路由导航 push</button>
        <button type="" @click="replaceEvent(item)">
          编程式路由导航 replace
        </button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      propsThreeList: [
        { id: '01', title: '北京' },
        { id: '02', title: '上海' },
        { id: '03', title: '聊城' },
      ],
    }
  },
  methods: {
    pushEvent(item) {
      this.$router.push({
        // name: 'propsthreedetail',
        path: '/home/propsthree/propsthreedetail',
        query: {
          id: item.id,
          title: item.title,
        },
      })
    },
    replaceEvent(item) {
      console.log('replace===')
      this.$router.replace({
        // name: 'propsthreedetail',
        path: '/home/propsthree/propsthreedetail',
        query: {
          id: item.id,
          title: item.title,
        },
      })
    },
  },
}
</script>

<style></style>
