/*
 * @Author: Chengya
 * @Description: vuex 的核心文件
 * @Date: 2024-02-07 14:57:39
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-14 17:13:57
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const actions = {
  add(context, value) {
    context.commit("ADD", value);
  },
  unadd(context, value) {
    context.commit("UNADD", value);
  },
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
};

const mutations = {
  ADD(state, value) {
    state.sum += value;
  },
  UNADD(state, value) {
    state.sum -= value;
  },
};

const state = {
  sum: 10,
  name: "中国科学院大学",
  address: "北京",
};

const getters = {
  bigSum() {
    return state.sum * 100;
  },
};

export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
});
