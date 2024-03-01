<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-01-27 11:35:36
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-04 17:13:59
-->
<template>
  <div>
    <h2>插槽</h2>
    <div>
      <h3>默认插槽的使用</h3>
      <TestOne></TestOne>
      <TestOne>
        hello default solt
      </TestOne>
    </div>
    <hr />
    <div>
      <h3>具名插槽的使用</h3>
      <TestTwo>
        <h2 slot="test2">hello world</h2>
        <p slot="test2_1">你好世界</p>
      </TestTwo>
      <TestTwo>
        <!-- 用 template 包裹时 可以写成 v-solt:test2 -->
        <template slot="test2">
          <h1>具名插槽</h1>
          <h1>具名插槽</h1>
          <h1>具名插槽</h1>
        </template>
        <template v-slot:test2_1>
          <h2>具名插槽</h2>
          <h2>具名插槽</h2>
        </template>
      </TestTwo>
    </div>
    <hr />
    <div>
      <h3>作用域插槽的使用</h3>
      <!-- 插槽向使用插槽的地方传递数据 -->
      <TestThree>
        <template slot-scope="myParamsObj" slot="test3">
          <p v-for="(item, index) in myParamsObj.list" :key="index">
            {{ item }}
          </p>
          <h2>{{ myParamsObj.myCar }}</h2>
        </template>
      </TestThree>
      <TestThree>
        <template v-sssscope="{ list, myCar }" slot="test3">
          <p v-for="(item, index) in list" :key="index">
            {{ item }}
          </p>
          <h2>{{ myCar }}</h2>
        </template>
      </TestThree>
    </div>
  </div>
</template>

<script>
import TestOne from './components/TestOne.vue'
import TestTwo from './components/TestTwo.vue'
import TestThree from './components/TestThree.vue'
export default {
  name: 'App',
  components: {
    TestOne,
    TestTwo,
    TestThree,
  },
}
</script>
