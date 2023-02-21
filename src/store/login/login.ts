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
			console.log(res, 222)
			console.log(res.token, 222)
			this.token = res.token
			// this.userInfo = res.userInfo
		}
	}
})

export default useLoginStore
