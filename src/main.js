import Vue from "vue";
import App from "./App.vue";
import "./style/global.less";
import VueRouter from "vue-router";
import router from "@/router";
import showMessage from "./utils/showMessage";
import "./mock";

Vue.prototype.$showMessage = showMessage;
Vue.use(VueRouter);

import vLoading from "./directives/loading";
Vue.directive("loading", vLoading);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

