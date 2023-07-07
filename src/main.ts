// 创建应用实例的方法 createApp
import { createApp } from "vue";
// 导入根组件App
import App from "./App.vue";
// 引入清除公共样式sass样式
import "@/style/reset.scss";
// 引入路由并使用
import router from "@/router/index";
// 使用createApp创建实例对象
const app = createApp(App);
// 引入全局组件header和floor
import Header from "@/components/Header/index.vue";
import Floor from "@/components/Floor/index.vue";
// 引用element-plus插件
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
// 引用element图标库并使用
import "element-plus/dist/index.css";

//@ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
// 国际化文件
app.use(ElementPlus, {
  locale: zhCn,
});
// 注册全局组件
app.component("Header", Header);
app.component("Floor", Floor);
// 使用插件
app.use(ElementPlus);
app.use(router);

// 挂载到挂载点上
app.mount("#app");
