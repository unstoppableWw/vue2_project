import Vue from "vue";
import App from "./App.vue";
import "./style/global.less";
import VueRouter from "vue-router";
import router from "@/router";
import showMessage from "./utils/showMessage";
import "./mock";
import "./eventBus"
Vue.prototype.$showMessage = showMessage;
Vue.use(VueRouter);

// 注册全局指令
import vLoading from "./directives/loading";
import vLazy from "./directives/lazy";
Vue.directive("loading", vLoading);
Vue.directive("lazy", vLazy);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

