/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-01-27 11:35:36
 * @LastEditors: Chengya
 * @LastEditTime: 2024-01-29 17:08:32
 */
import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  beforeCreate() {
    Vue.prototype.$bus = this; //安装全局事件总线，$bus就是当前应用的vm
  },
  render: (h) => h(App),
});
