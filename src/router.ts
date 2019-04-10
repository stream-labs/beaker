import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import demos from "@/demos";

Vue.use(Router);

export default new Router({
  routes: [
    ...demos.map(({ name, componentName }) => {
      return {
        path: `/${name}`,
        name: name,
        component: () =>
          import(/* webpackChunkName: "view-[request]" */ `@/demos/${componentName}.vue`)
      };
    }),
    {
      path: "*",
      redirect: "/installation"
    }
  ]
});
