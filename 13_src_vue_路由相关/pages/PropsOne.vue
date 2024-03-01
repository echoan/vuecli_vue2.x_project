<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-21 11:38:06
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-01 13:59:23
-->
<template>
  <div>
    <ul>
      <li v-for="(item, index) in dataList" :key="item.id">
        <!-- props 传参 形式一 -->
        <router-link to="/home/propsone/propsonedetail">
          {{ item.title }}
        </router-link>
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
      dataList: [
        { id: '1', title: 'hello' },
        { id: '2', title: 'good' },
        { id: '3', title: 'nice' },
      ],
    }
  },
}
</script>

<style></style>
