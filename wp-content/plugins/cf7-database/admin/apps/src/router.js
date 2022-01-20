import Vue from "vue";
import Router from "vue-router";
import pageData from "./views/PageData";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "pageData",
      component: pageData
    }
  ]
});
