import { userSignin } from '@/service/login/login'
import { defineStore } from 'pinia'

const useLoginStore = defineStore('login', {
	state: () => ({
		isLogin: 'false',
		token: '',
		userInfo: {}
	}),
	getters: {},
	actions: {
		async signInAction(data: any) {
			const res = await userSignin(data)
			this.token = res.token
			this.userInfo = res.userInfo
		}
	}
})

export default useLoginStore
