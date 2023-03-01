import { createList, modifyList, queryList, removeList } from '@/service/main/system/user/user'
import { defineStore } from 'pinia'

interface IUserState {
	userList: any
	total: any
	queryParams: any
}
const useUserStore = defineStore('user', {
	state: (): IUserState => ({
		userList: [],
		total: 0,
		queryParams: {}
	}),
	actions: {
		async queryUserList(data?: any) {
			if (data) this.queryParams = data
			let res = await queryList(data || this.queryParams)
			this.userList = res.result.list
			this.total = res.result.totalCount
		},
		async createUserList(data: any) {
			await createList(data)
			this.queryUserList()
		},
		async modifyUserList(id: number, data: any) {
			await modifyList(id, data)
			this.queryUserList()
		},
		async removeUserList(id: number) {
			await removeList(id)
			this.queryUserList()
		}
	}
})

export default useUserStore
