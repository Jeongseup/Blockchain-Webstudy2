import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import getList from '../views/getList.vue'
import Person from '../views/Person.vue'
// import GoogleLogin from '../views/GoogleLogin.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/getlist',
        name: 'getList',
        component: getList
    },
    {
        path: '/person',
        name: 'Person',
        component: Person
    },
    {
        path: '/googlelogin',
        name: 'GoogleLogin',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "parent" */ '../views/GoogleLogin.vue')
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    // history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
