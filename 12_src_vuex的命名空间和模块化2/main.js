/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-01-27 11:35:36
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-28 22:31:24
 */
import Vue from "vue";
import App from "./App.vue";
import store from "./store";
Vue.config.productionTip = false;
new Vue({
  el: "#app",
  store,
  beforeCreate() {
    //注册 全局事件总线
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
});
