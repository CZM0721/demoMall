//配置路由
//第一步：引入插件、安装插件
import VueRouter from "vue-router";
import Vue from "vue";
import login from "@/page/Login";

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path: '/login',
            component: login,
        },
        // 配置重定向
        {
            path:'*',
            redirect: '/login'
        }
    ]
})