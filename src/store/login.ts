import { defineStore } from 'pinia'

const useLoginStore = defineStore('login', {
	state: () => ({
		isLogin: 'false'
	}),
	getters: {},
	actions: {}
})

export default useLoginStore
