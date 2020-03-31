import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'main',//主页
            component: () => import('@/page/main.vue'),
        },
        {
            path: '/section',
            name: 'section',
            meta: {
                title: '主场景',
                index: 1
            },
            component: () => import('@/page/section.vue')
        }, {
            path: '/setGame',
            name: 'setGame',
            meta: {
                title: '设置',
                index: 1
            },
            component: () => import('@/page/setGame.vue')
        }, {
            path: '*',
            name: 'notfound',
            meta: {
                title: '404',
                index: 1
            },
            component: () => import('@/page/404.vue')
        },
    ]
})
