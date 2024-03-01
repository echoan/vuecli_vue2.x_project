/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-01-28 10:58:52
 * @LastEditors: Chengya
 * @LastEditTime: 2024-01-28 11:20:01
 */
export default {
  install(Vue) {
    //定义一个全局过滤器
    Vue.filter("mySlice", function (value) {
      return value.slice(0, 4);
    });
    //定义一个全局的自定义指令
    Vue.directive("1000big", function (element, binding) {
      element.innerText = binding.value * 1000;
    });
    //定义一个全局的混入
    Vue.mixin({
      data() {
        return {
          x: 200000,
          y: 1000000,
        };
      },
    });
    //在Vue原型上添加一个方法
    Vue.prototype.say = () => {
      console.log("你真的好美啊--源自plugins的赞叹～");
    };
  },
};
