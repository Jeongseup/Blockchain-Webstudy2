import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import NestedComponent from "../views/NestedComponent.vue";
import NestedComponent2 from "../views/NestedComponent2.vue";
import NestedComponent3 from "../views/NestedComponent3.vue";
import NestedComponent4 from "../views/NestedComponent4.vue";
import NestedComponent5 from "../views/NestedComponent5.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/nested",
    name: "NestedComponent",
    component: NestedComponent,
  },
  {
    path: "/nested2",
    name: "NestedComponent2",
    component: NestedComponent2,
  },
  {
    path: "/nested3",
    name: "NestedComponent3",
    component: NestedComponent3,
  },
  {
    path: "/nested4",
    name: "NestedComponent4",
    component: NestedComponent4,
  },
  {
    path: "/nested5",
    name: "NestedComponent5",
    component: NestedComponent5,
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
