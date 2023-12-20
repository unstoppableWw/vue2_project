import Home from "@/Views/Home";
import About from "@/Views/About";
import Blog from "@/Views/Blog";
import Project from "@/Views/Project";
import Message from "@/Views/Message";
import BlogDetail from "@/Views/Blog/Detail";

import VueRouter from "vue-router";
import { titleController } from "@/utils";


const router = new VueRouter({
  // 配置
  routes:[
    {
      name: "Home",
      path: "/",
      component: Home,
      meta: {
        title: "首页",
      },
    },
    {
      name: "About",
      path: "/about",
      component: About,
      meta: {
        title: "关于我",
      },
    },
    {
      name: "Blog",
      path: "/article",
      component: Blog,
      meta: {
        title: "文章",
      },
    },
    {
      name: "CategoryBlog",
      path: "/article/cate/:categoryId",
      component: Blog,
      meta: {
        title: "文章",
      },
    },
    {
      name: "BlogDetail",
      path: "/article/:id",
      component: BlogDetail,
      meta: {
        title: "文章详情",
      },
    },
    {
      name: "Project",
      path: "/project",
      component: Project,
      meta: {
        title: "项目&效果",
      },
    },
    {
      name: "Message",
      path: "/message",
      component: Message,
      meta: {
        title: "留言板",
      },
    },
  ],
  mode: "history",
});

router.afterEach((to) => {
  if (to.meta.title) {
    titleController.setRouteTitle(to.meta.title);
  }
});

export default router;