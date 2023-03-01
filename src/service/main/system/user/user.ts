import request from '@/utils/request'

export function createList(data: any) {
	return request({
		url: `/api/users`,
		method: 'post',
		data: data
	})
}

export function queryList(data: any) {
	return request({
		url: '/api/users',
		method: 'get',
		params: data
	})
}

export function modifyList(id: number, data: any) {
	return request({
		url: `/api/users/${id}`,
		method: 'patch',
		data: data
	})
}

export function removeList(id: number) {
	return request({
		url: `/api/users/${id}`,
		method: 'delete'
	})
}
