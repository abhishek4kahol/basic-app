import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import CategoryPage from "./components/CategoryPage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/category",
      name: "CategoryPage",
      component: CategoryPage
    }
  ]
});
