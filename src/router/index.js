import Home from "@/Views/Home";
import About from "@/Views/About";
import Blog from "@/Views/Blog";
import Project from "@/Views/Project";
import Message from "@/Views/Message";

import VueRouter from "vue-router";



const router = new VueRouter({
  // 配置
  routes:[
    { name: "Home", path: "/", component: Home },
    { name: "About", path: "/about", component: About },
    { name: "Blog", path: "/article", component: Blog },
    { name: "Project", path: "/project", component: Project },
    { name: "Message", path: "/message", component: Message },
  ], // 路由匹配规则
  mode: "history",
});
export default router;
