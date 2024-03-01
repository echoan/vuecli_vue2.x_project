/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-19 14:19:33
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-19 14:20:56
 */
//计数相关
export const countOptions = {
  namespaced: "aboutCount",
  actions: {
    oddadd(context, value) {
      //有业务逻辑
      if (context.state.sum % 2 == "0") {
        context.commit("ADD", value);
      }
    },
    delayadd(context, value) {
      //有业务逻辑
      setTimeout(() => {
        context.commit("ADD", value);
      }, 2000);
    },
  },
  mutations: {
    ADD(state, value) {
      state.sum += value;
    },
    UNADD(state, value) {
      state.sum -= value;
    },
  },
  state: {
    sum: 10,
    name: "中国科学院大学",
    address: "北京",
  },
  getters: {
    bigSum(state) {
      return state.sum * 100;
    },
  },
};
