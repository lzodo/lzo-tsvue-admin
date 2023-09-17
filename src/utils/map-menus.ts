import type { RouteRecordRaw } from 'vue-router'

export let defaultMenu: any = null // 设置登录后默认跳转的菜单
export function mapMenusToRoute(menus: any[]) {
	// 步骤1 已得到菜单
	// 步骤2 一样需要先编辑好所有route
	let localRoutes = [
		{ path: '/main/analysis/gismap', component: () => import('@/views/main/analysis/gismap/gismap.vue') },
		{ path: '/main/analysis/dashboard', component: () => import('@/views/main/analysis/dashboard/dashboard.vue') },
		{
			path: '/main/analysis/iframes/:id',
			component: () => import('@/views/main/analysis/iframes/iframes.vue')
		},
		{ path: '/main/system/user', component: () => import('@/views/main/system/user/user.vue') },
		{ path: '/main/system/role', component: () => import('@/views/main/system/role/role.vue') },
		{ path: '/main/system/menu', component: () => import('@/views/main/system/menu/menu.vue') },

		{ path: '/main/case/file-upload', component: () => import('@/views/main/case/file-upload/index.vue') },

		{
			path: '/main/special-effects/special-js',
			component: () => import('@/views/main/special-effects/special-js/index.vue')
		},
		{
			path: '/main/special-effects/special-css',
			component: () => import('@/views/main/special-effects/special-css/index.vue')
		}
	]

	// 步骤三 根据菜单去添加有权限的路由, 将需要的 添加到路由name 为main的route中
	const menuRoutes: RouteRecordRaw[] = []
	for (const menu of menus) {
		for (const submenu of menu.children) {
			let route = localRoutes.filter((item) => {
				if (/:id$/.test(item.path)) {
					if (item.path.replace('/:id', '') == submenu.url.replace(/\/[^/]*$/, '')) {
						return true
					}
				} else {
					if (item.path == submenu.url) {
						return true
					}
				}
			})[0]
			if (route) menuRoutes.push(route) // router.addRoute('main', route)
			if (!defaultMenu && route) defaultMenu = submenu
		}
	}
	console.log(menuRoutes)
	return menuRoutes
}

/**
 * 根据路径奇葩需要显示的菜单
 * @param path
 * @param userMenus
 */
export function mapPathToMenu(path: string, menus: any[]) {
	for (const menu of menus) {
		for (const submenu of menu.children) {
			if (submenu.url == path) {
				return submenu.id + ''
			}
		}
	}
}

/**
 * 通过路径 得到面包屑上级路径
 * @param path
 * @param menus
 */
export function mapPathTbBreadcrumb(path: string, menus: any) {
	for (const menu of menus) {
		let firstSubMenu = ''
		for (const submenu of menu.children) {
			if (!firstSubMenu) firstSubMenu = submenu.url
			if (submenu.url == path) {
				return [
					// { id: 1, path: '', name: '首页' },
					{ id: 2, path: firstSubMenu, name: menu.name }, // 不传path，就是disable无法交互状态,这边让他进入第一个子集菜单
					{ id: 3, path: submenu.url, name: submenu.name }
				]
			}
		}
	}
}

/**
 *  动态路由：根据用户不同的菜单权限，动态的注册应有的路由，而不是一次性祖册所有路由
 *  实现方案一:
 *		基于角色的动态路由，枚举出所有可能存在的角色，与登录时查到的角色对比，指定好哪些角色注册哪些路由(不推荐：角色和角色里的权限随时变)
 *
 *  实现方案二：
 * 		基于菜单的动态路由，将得到的菜单映射为路由对象
 */

// 获取索引路由列表
// 步骤1 获取菜单列表

// 步骤2 一样需要先编辑好所有route  (coderwhy 自动化工具有时间可以了解一下)
// let localRoutes = [
// 	{ path: '/main/system/user', component: () => import('../views/main/system/user/user.vue') },
// 	{ path: '/main/system/role', component: () => import('../views/main/system/role/role.vue') },
// 	{ path: '/main/system/menu', component: () => import('../views/main/system/menu/menu.vue') }
// ]

// 步骤三 根据菜单去添加有权限的路由, 将需要的 添加到路由name 为main的route中
// router.addRoute('main', localRoutes[0])
// =========================================跳转执行就需要设置一次，要到获取菜单成功后操作===================
