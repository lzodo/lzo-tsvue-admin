import request from '@/utils/request'

export function queryList(data: any) {
	return request({
		url: '/api/users/query',
		method: 'post',
		data: data
	})
}

export function removeList(id: number) {
	return request({
		url: `/api/users/${id}`,
		method: 'delete'
	})
}
