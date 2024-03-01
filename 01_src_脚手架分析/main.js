import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

const my = { age: 88 };

new Vue({
  render: (h) => h(App),
}).$mount("#app");

// new Vue({
//   el: "#app",
//   render: (h) => h(App),
// });
