/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-01-27 11:35:36
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-04 14:37:10
 */
import Vue from "vue";
import App from "./App.vue";
import vueResource from "vue-resource";
Vue.config.productionTip = false;
Vue.use(vueResource);
new Vue({
  el: "#app",
  beforeCreate() {
    //注册 全局事件总线
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
});
