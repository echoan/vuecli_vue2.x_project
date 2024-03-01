import Vue from "vue";
import App from "./App.vue";
//在全局配置 混入
import { mySceondtMixin } from "./mixin";
Vue.mixin(mySceondtMixin);
//引入插件 并全局应用
import myPlugins from "./plugins";
Vue.use(myPlugins);
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: (h) => h(App),
});
