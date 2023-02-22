import { localCatch } from '@/utils/catch'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			redirect: '/main'
		},
		{
			path: '/login',
			component: () => import('../views/login/Login.vue')
		},
		{
			path: '/main',
			component: () => import('../views/main/Main.vue')
		},
		{
			path: '/:pathMatch(.*)',
			component: () => import('../views/not-found/NotFound.vue')
		}
	]
})

// 路由导航守卫
let whiteList = ['/login']
router.beforeEach((to) => {
	if (!whiteList.includes(to.path)) {
		let token = localCatch.getItem('token')
		if (!token) return '/login' // return 可以导航到login
	} else {
		// 没返回或返回undefined则正常跳转
	}
})

export default router
