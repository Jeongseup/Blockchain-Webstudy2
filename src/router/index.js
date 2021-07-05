import {
  createRouter,
  createWebHistory
} from "vue-router";

import Home from "../views/Home.vue";
import dbList from "../views/RenderingIf.vue";

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },


  {
    path: "/study",
    name: "study",
    component: dbList,

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    // import( /* webpackPrefetch:true, webpackChunkName: "study" */ "../views/dbList.vue"),
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue"),
  },


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;