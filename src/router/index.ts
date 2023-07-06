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
    {
      path: "/hospital",
      name: "hospital",
      component: () => import("@/pages/hospital/index.vue"),
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
