import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import KakaoLogin2 from "../views/KakaoLogin2.vue";
import NaverLogin from "../views/NaverLogin.vue";
import NaverLogin2 from "../views/NaverLogin2.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/kakaologin2",
        name: "KakaoLogin2",
        component: KakaoLogin2,
    },
    {
        path: "/naverlogin",
        name: "NaverLogin",
        component: NaverLogin,
    },
    {
        path: "/naverlogin2",
        name: "NaverLogin2",
        component: NaverLogin2,
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
    history: createWebHistory(),
    // history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
