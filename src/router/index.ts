import { createRouter, createWebHistory } from "vue-router";
// createRouter创建路由实例
const router = createRouter({
  // 路由模式history
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      name: "home",
      // 路由懒加载模式
      component: () => import("@/pages/home/index.vue"),
      children: [],
    },
    // 医院详情页
    {
      path: "/hospital",
      name: "hospital",
      component: () => import("@/pages/hospital/index.vue"),
      // 子路由
      children:[
        {
          // 医院详细信息
          path:'detail',
          component:()=>import("@/pages/hospital/detail/index.vue")
        },
        {
          // 信息信息
          path:'close',
          component:()=>import("@/pages/hospital/close/index.vue")
        },
        {
          // 信息信息
          path:'notice',
          component:()=>import("@/pages/hospital/notice/index.vue")
        },
        {
          // 信息信息
          path:'register',
          component:()=>import("@/pages/hospital/register/index.vue")
        },
        {
          // 信息信息
          path:'search',
          component:()=>import("@/pages/hospital/search/index.vue")
        }
      ]
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
  //   控制滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    };
  },
});
export default router;
