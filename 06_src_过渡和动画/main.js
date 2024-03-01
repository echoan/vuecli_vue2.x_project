/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-01-27 11:35:36
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-02 13:59:40
 */
import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  beforeCreate() {
    //注册 全局事件总线
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
});
