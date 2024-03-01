/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-19 14:19:42
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-19 14:28:16
 */
//添加名字相关
import { nanoid } from "nanoid";
export default {
  namespaced: "aboutName",
  actions: {
    addChengName(context, value) {
      if (value.name.indexOf("程") === 0) {
        context.commit("ADDNAME", value);
      } else {
        alert("只能添加姓程的名字");
      }
    },
  },
  mutations: {
    ADDNAME(state, nameObj) {
      state.personList.unshift(nameObj);
    },
  },
  state: {
    personList: [{ name: "tom", id: nanoid() }],
    text: "hello world",
  },
  getters: {
    currentText(state) {
      return state.text + ",你好,世界";
    },
  },
};
