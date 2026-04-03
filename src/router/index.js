// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// 1. 定义路由组件（通常使用懒加载）
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },

]

// 2. 创建路由实例
const router = createRouter({
    // 使用 HTML5 模式（History 模式），URL 不带 #
    history: createWebHistory(),
    routes,
})

export default router