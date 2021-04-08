import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { Router } from "../src/router/routers";
import { store } from "./store/store";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Router,
  mode: "history",
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
