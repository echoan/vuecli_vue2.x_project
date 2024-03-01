/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-01-27 11:35:36
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-22 19:37:15
 */
import Vue from "vue";
import App from "./App.vue";
import store from "./store";

//完整引入
//import ElementUI from "element-ui";
//import "element-ui/lib/theme-chalk/index.css";
//Vue.use(ElementUI);

//按需引入
import { Button, Row } from "element-ui";
Vue.use(Button);
Vue.use(Row);
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
