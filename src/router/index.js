
import NotFound from "@/Views/NotFound.vue";
import VueRouter from "vue-router";
import { titleController } from "@/utils";


const router = new VueRouter({
  // 配置
  routes:[
    {
      name: "Home",
      path: "/",
      component: () => import(/* webpackChunkName: "home" */ "@/Views/Home"),
      meta: {
        title: "首页",
      },
    },
    {
      name: "About",
      path: "/about",
      component: () => import(/* webpackChunkName: "about" */ "@/Views/About"),
      meta: {
        title: "关于我",
      },
    },
    {
      name: "Blog",
      path: "/article",
      component: () => import(/* webpackChunkName: "blog" */ "@/Views/Blog"),
      meta: {
        title: "文章",
      },
    },
    {
      name: "CategoryBlog",
      path: "/article/cate/:categoryId",
      component: () => import(/* webpackChunkName: "blog" */ "@/Views/Blog"),
      meta: {
        title: "文章",
      },
    },
    {
      name: "BlogDetail",
      path: "/article/:id",
      component: () =>
        import(/* webpackChunkName: "blogdetail" */ "@/Views/Blog/Detail"),
      meta: {
        title: "文章详情",
      },
    },
    {
      name: "Project",
      path: "/project",
      component: () =>
        import(/* webpackChunkName: "project" */ "@/Views/Project"),
      meta: {
        title: "项目&效果",
      },
    },
    {
      name: "Message",
      path: "/message",
      component: () =>
        import(/* webpackChunkName: "message" */ "@/Views/Message"),
      meta: {
        title: "留言板",
      },
    },
    {
      name: "NotFound",
      path: "*",
      component: NotFound,
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