import { userSignin } from '@/service/login/login'
import { defineStore } from 'pinia'
import type { LoginFromData } from '@/types'
import { localCatch } from '@/utils/catch'
import router from '@/router'

// 指定state数据的类型（复杂可以网上找 json to typestrip 工具转换好拿来用）
interface ILoignState {
	isSavePasswd: boolean
	token: string
	userInfo: any // 或者直接用any
}

const useLoginStore = defineStore('login', {
	state: (): ILoignState => ({
		isSavePasswd: false,
		token: '',
		userInfo: {
			id: undefined
		}
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

			// 通过角色id获取菜单

			// 页面跳转
			router.push('/main')
		}
	},
	persist: true
})

export default useLoginStore
