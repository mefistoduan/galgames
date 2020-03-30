import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'main',//主页
            component: () => import('@/page/main.vue')
        }, {
            path: '/section',
            name: 'section',//主场景
            component: () => import('@/page/section.vue')
        },
        {
            path: '*',
            name: 'notfound',
            component: () => import('@/page/404.vue')
        }]
})
