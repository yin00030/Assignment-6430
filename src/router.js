import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Registration from "./views/Registration.vue";
import Dashboard from "./views/Dashboard.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/registration",
      name: "registration",
      component: Registration
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    }
  ]
});
