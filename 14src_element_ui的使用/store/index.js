/*
 * @Author: Chengya
 * @Description: vuex 的核心文件
 * @Date: 2024-02-07 14:57:39
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-19 14:29:42
 */
import Vue from "vue";
import Vuex from "vuex";
import { countOptions } from "./count";
import nameOptions from "./name";
Vue.use(Vuex);
//vuex 模块化 和命名空间
export default new Vuex.Store({
  modules: {
    aboutCount: countOptions,
    aboutName: nameOptions,
  },
});
