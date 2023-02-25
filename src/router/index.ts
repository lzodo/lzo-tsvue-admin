import { localCatch } from '@/utils/catch'
import { defaultMenu } from '@/utils/map-menus'
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
			component: () => import('../views/login/login.vue')
		},
		{
			path: '/main',
			name: 'main',
			component: () => import('../views/main/main.vue'),
			children: [
				// 子路由不需要斜杆开头 可以通过 /main/system/user 访问, 斜杆开头就不能链接main了
				// 不推荐的方式，接口设置菜单路径 /main/system/role，我们这里保持一致，每个用户都有注册列出的所有路由
				// 漏洞: 即使没有 role 菜单权限的用户 访问 /main/system/role 也能跳转，可能会一直弹出没有权限
				// 推荐使用动态路由，不推荐这样静态 注册
				// { path: 'system/user', component: () => import('../views/main/system/user/user.vue') },
				// { path: '/main/system/role', component: () => import('../views/main/system/role/role.vue') },
				// { path: '/main/system/menu', component: () => import('../views/main/system/menu/menu.vue') }
			]
		},
		{
			path: '/:pathMatch(.*)',
			component: () => import('../views/not-found/not-found.vue')
		}
	]
})

// 用户登录成功后注册动态路由，刷新的时候判断如果用户已经登录需要重新祖册
// 在 pinia 里处理了

// 路由导航守卫
let whiteList = ['/login']
router.beforeEach((to) => {
	if (!whiteList.includes(to.path)) {
		let token = localCatch.getItem('token')
		if (!token) return '/login' // return 可以导航到login
	} else {
		// 没返回或返回undefined则正常跳转
	}

	if (to.path === '/main') return defaultMenu?.url
})

export default router
