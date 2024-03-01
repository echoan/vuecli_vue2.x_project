/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-01-27 11:35:36
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-20 20:04:12
 */
import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import VueRouter from "vue-router";
Vue.use(VueRouter);
Vue.config.productionTip = false;
new Vue({
  el: "#app",
  store,
  router,
  beforeCreate() {
    //注册 全局事件总线
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
});
