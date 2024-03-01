<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-01-27 11:35:36
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-03 22:46:41
-->
<template>
  <div class="container">
    <Search />
    <List />
  </div>
</template>

<script>
import Search from './components/Search'
import List from './components/List'
export default {
  name: 'App',
  components: { Search, List },
}
</script>
