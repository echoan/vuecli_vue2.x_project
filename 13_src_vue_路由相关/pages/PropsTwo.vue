<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-21 11:38:25
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-21 14:10:09
-->
<template>
  <div>
    <ul>
      <li v-for="(item, index) in propsTwoList" :key="item.id">
        <!-- 对象形式 -->
        <router-link
          :to="{
            name: 'propstwodetail',
            params: {
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
      propsTwoList: [
        { id: '01', title: '今天是个好日子' },
        { id: '02', title: '龙年大吉' },
        { id: '03', title: '哇哈哈' },
      ],
    }
  },
  methods: {
    pushEvent(item) {
      this.$router.push({
        name: 'propstwodetail',
        params: {
          id: item.id,
          title: item.title,
        },
      })
    },
    replaceEvent(item) {
      this.$router.push({
        name: 'propstwodetail',
        params: {
          id: item.id,
          title: item.title,
        },
      })
    },
  },
}
</script>

<style></style>
