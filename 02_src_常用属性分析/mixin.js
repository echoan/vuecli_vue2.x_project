/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-01-28 10:18:37
 * @LastEditors: Chengya
 * @LastEditTime: 2024-01-28 10:31:56
 */
export const myFirstMixin = {
  data() {
    return {
      title: "这里是 myFirstMixin混入",
    };
  },
  methods: {
    printText() {
      console.log(this.title);
      console.log(this, "this=====");
    },
  },
  mounted() {
    console.log("hello world");
  },
};

export const mySceondtMixin = {
  data() {
    return {
      title: "这里是mySceondtMixin混入",
    };
  },
  methods: {
    printHello() {
      console.log(this.title);
      console.log("你好");
    },
  },
};
