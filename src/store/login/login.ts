import { userSignin } from '@/service/login/login'
import { defineStore } from 'pinia'
import type { LoginFromData } from '@/types'
import { localCatch } from '@/utils/catch'
import router from '@/router'
import { mapMenusToRoute } from '@/utils/map-menus'

// 指定state数据的类型（复杂可以网上找 json to typestrip 工具转换好拿来用）
interface ILoignState {
	isSavePasswd: boolean
	token: string
	userInfo: any // 或者直接用any
	userRoles: any
	userMenus: any
	defaultShowId: any
}

const useLoginStore = defineStore('login', {
	state: (): ILoignState => ({
		isSavePasswd: false,
		token: '',
		userInfo: {
			id: undefined
		},
		userRoles: {},
		userMenus: [],
		defaultShowId: 39
	}),
	getters: {},
	actions: {
		async savePasswdActive(value: boolean) {
			this.isSavePasswd = value
		},
		async signInAction(data: LoginFromData) {
			const res = await userSignin(data)
			this.token = res.token
			this.userInfo = res.userInfo
			localCatch.setItem('token', this.token)
			localCatch.setItem('userInfo', this.userInfo)
			if (this.isSavePasswd) {
				localCatch.setItem('saveInfo', data)
			} else {
				localCatch.removeItem('saveInfo')
			}

			// 获取用户详细信息（角色）
			this.userRoles = {
				id: 1,
				name: '超级管理员',
				intro: '所有权限'
			}
			// 通过角色id获取菜单 不调用接口先模拟数据
			this.userMenus = [
				{
					id: 38,
					name: '系统总览',
					type: 1,
					url: '/main/analysis',
					icon: 'el-icon-monitor',
					sort: 1,
					children: [
						{
							id: 39,
							name: 'Echarts',
							type: 2,
							url: '/main/analysis/dashboard',
							icon: 'dataAnalysis',
							sort: 1,
							children: []
						},
						// {
						// 	id: 41,
						// 	name: '公司管理系统',
						// 	type: 2,
						// 	url: '/main/analysis/iframes/iot',
						// 	icon: 'el-icon-monitor',
						// 	sort: 1,
						// 	children: []
						// },
						// {
						// 	id: 42,
						// 	name: '移动端项目',
						// 	type: 2,
						// 	url: '/main/analysis/iframes/mvue',
						// 	icon: 'iphone',
						// 	sort: 1,
						// 	children: []
						// },
						// {
						// 	id: 43,
						// 	name: '学习文档总结',
						// 	type: 2,
						// 	url: '/main/analysis/iframes/docs',
						// 	icon: 'Tickets',
						// 	sort: 1,
						// 	children: []
						// },
						// {
						// 	id: 44,
						// 	name: '案例库',
						// 	type: 2,
						// 	url: '/main/analysis/iframes/case',
						// 	icon: 'Film',
						// 	sort: 1,
						// 	children: []
						// },
						{
							id: 46,
							name: '高德地图',
							type: 2,
							url: '/main/analysis/gismap',
							icon: 'Location',
							sort: 1,
							children: []
						}
					]
				},
				{
					id: 40,
					name: '案例',
					type: 1,
					url: '/main/case',
					icon: 'el-icon-monitor',
					sort: 1,
					children: [
						{
							id: 401,
							name: '图片上传',
							type: 2,
							url: '/main/case/file-upload',
							icon: 'el-icon-monitor',
							sort: 1,
							children: []
						}
					]
				},
				{
					id: 37,
					name: '特殊效果',
					type: 1,
					url: '/main/special-effects',
					icon: 'el-icon-monitor',
					sort: 1,
					children: [
						{
							id: 371,
							name: 'CSS效果',
							type: 2,
							url: '/main/special-effects/special-css',
							icon: 'dataAnalysis',
							sort: 1,
							children: []
						},
						{
							id: 372,
							name: 'JS效果',
							type: 2,
							url: '/main/special-effects/special-js',
							icon: 'el-icon-monitor',
							sort: 1,
							children: []
						}
					]
				},
				{
					id: 1,
					name: '系统管理',
					type: 1,
					url: '/main/system',
					icon: 'el-icon-setting',
					sort: 2,
					children: [
						{
							id: 2,
							name: '用户管理',
							type: 2,
							url: '/main/system/user',
							icon: 'User',
							sort: 1,
							children: [
								{
									id: 21,
									url: null,
									name: '创建用户',
									type: 3,
									printId: 3,
									permission: 'system:user:create'
								},
								{
									id: 22,
									url: null,
									name: '删除用户',
									type: 3,
									printId: 3,
									permission: 'system:user:delete'
								},
								{
									id: 23,
									url: null,
									name: '修改用户',
									type: 3,
									printId: 3,
									permission: 'system:user:update'
								},
								{
									id: 24,
									url: null,
									name: '查询用户',
									type: 3,
									printId: 3,
									permission: 'system:user:query'
								}
							]
						},
						{
							id: 3,
							name: '角色管理',
							type: 2,
							url: '/main/system/role',
							icon: 'wallet',
							sort: 1,
							children: [
								{
									id: 31,
									url: null,
									name: '创建角色',
									type: 3,
									printId: 3,
									permission: 'system:role:create'
								},
								{
									id: 32,
									url: null,
									name: '删除角色',
									type: 3,
									printId: 3,
									permission: 'system:role:delete'
								},
								{
									id: 33,
									url: null,
									name: '修改角色',
									type: 3,
									printId: 3,
									permission: 'system:role:update'
								},
								{
									id: 34,
									url: null,
									name: '查询角色',
									type: 3,
									printId: 3,
									permission: 'system:role:query'
								}
							]
						},
						{
							id: 4,
							name: '菜单管理',
							type: 2,
							url: '/main/system/menu',
							icon: 'Menu',
							sort: 1,
							children: [
								{
									id: 41,
									url: null,
									name: '创建菜单',
									type: 3,
									printId: 3,
									permission: 'system:menu:create'
								},
								{
									id: 42,
									url: null,
									name: '删除菜单',
									type: 3,
									printId: 3,
									permission: 'system:menu:delete'
								},
								{
									id: 43,
									url: null,
									name: '修改菜单',
									type: 3,
									printId: 3,
									permission: 'system:menu:update'
								},
								{
									id: 44,
									url: null,
									name: '查询菜单',
									type: 3,
									printId: 3,
									permission: 'system:menu:query'
								}
							]
						}
					]
				}
			]

			// 跳转前先注册动态路由, 刷新的时候会消失
			this.loadDynamicRouter()

			// 页面跳转
			// router.push(defaultMenu.url) // 从路由拦截中实现
			router.push('/main')
		},
		loadDynamicRouter() {
			if (this.token && this.userMenus) {
				let menuRoutes = mapMenusToRoute(this.userMenus)
				menuRoutes.map((route) => router.addRoute('main', route))
			}
		}
	},
	persist: true
})

export default useLoginStore
