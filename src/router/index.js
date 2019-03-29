import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Tx from "../components/Tx";

Vue.use(Router);

const routes = [
    {
        path: "/",
        component: Home,
        // name: "main",
    },
    {
        path: "/transaction",
        component: Tx,
    },
];

let router = new Router({
    routes: routes,
});

// 全局路由守卫防止用户通过修改路由直接进入后面的页面
router.beforeEach((to, form, next) => {
    next();
});

export default router

