/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-20 19:59:13
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-01 14:42:18
 */
import VueRouter from "vue-router";
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import News from "../pages/News.vue";
import Message from "../pages/Message.vue";
import Detail from "../pages/Detail.vue";
import NewsDetail from "../pages/NewsDetail.vue";
import PropsOne from "../pages/PropsOne.vue";
import PropsOneDetail from "../pages/PropsOneDetail.vue";
import PropsTwo from "../pages/PropsTwo.vue";
import PropsTwoDetail from "../pages/PropsTwoDetail.vue";
import PropsThree from "../pages/PropsThree.vue";
import PropsThreeDetail from "../pages/PropsThreeDetail.vue";

const router = new VueRouter({
  mode: "history",
  //mode: "hash",
  routes: [
    {
      path: "/about",
      component: About,
      meta: { title: "关于" },
    },
    {
      path: "/home",
      component: Home,
      meta: { title: "首页" },
      children: [
        {
          path: "news",
          component: News,
          meta: { isAuth: true, title: "新闻" },
          //独享路由守卫
          // beforeEnter: (to, from, next) => {
          //   if (to.meta.isAuth) {
          //     if (localStorage.getItem("address") == "北京") {
          //       alert("当前地址为北京，不能查看news页面");
          //     } else {
          //       next();
          //     }
          //   } else {
          //     next();
          //   }
          // },
          children: [
            {
              name: "newsdetail",
              path: "newsdetail/:id/:title",
              component: NewsDetail,
            },
          ],
        },
        {
          path: "message",
          component: Message,
          meta: { title: "消息" },
          children: [{ name: "detail", path: "detail", component: Detail }],
        },
        {
          path: "propsone",
          component: PropsOne,
          meta: { title: "props1" },
          children: [
            {
              name: "propsonedetail",
              path: "propsonedetail",
              component: PropsOneDetail,
              props: { address: "北京", age: 28 },
            },
          ],
        },
        {
          path: "propstwo",
          component: PropsTwo,
          meta: { title: "props2" },
          children: [
            {
              name: "propstwodetail",
              path: "propstwodetail/:id/:title",
              component: PropsTwoDetail,
              props: true,
            },
          ],
        },
        // props传参数 params 方式
        // {
        //   path: "propsthree",
        //   component: PropsThree,
        //   children: [
        //     {
        //       name: "propsthreedetail",
        //       path: "propsthreedetail/:id/:title",
        //       component: PropsThreeDetail,
        //       props($route) {
        //         return {
        //           id: $route.params.id,
        //           title: $route.params.title,
        //         };
        //       },
        //     },
        //   ],
        // },
        // props传参数 query 方式
        // {
        //   path: "propsthree",
        //   component: PropsThree,
        //   children: [
        //     {
        //       name: "propsthreedetail",
        //       path: "propsthreedetail",
        //       component: PropsThreeDetail,
        //       props($route) {
        //         return {
        //           id: $route.query.id,
        //           title: $route.query.title,
        //         };
        //       },
        //     },
        //   ],
        // },
        // props传参数 简写 解构赋值
        {
          path: "propsthree",
          component: PropsThree,
          meta: { title: "props3" },
          children: [
            {
              name: "propsthreedetail",
              path: "propsthreedetail",
              component: PropsThreeDetail,
              // props({ query }) {
              //   return {
              //     id: query.id,
              //     title: query.title,
              //   };
              // },
              //或者  进一步解构赋值
              props({ query: { id, title } }) {
                return {
                  id,
                  title,
                };
              },
            },
          ],
        },
      ],
    },
  ],
});

//添加全局前置路由守卫

// router.beforeEach((to, form, next) => {
//   console.log(to, "to");
//   if (to.meta.isAuth) {
//     if (localStorage.getItem("address") == "北京") {
//       alert("当前地址为北京，不能查看news页面");
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

//添加全局后置路由守卫
router.afterEach((to, from) => {
  document.title = to.meta.title;
});
export default router;
