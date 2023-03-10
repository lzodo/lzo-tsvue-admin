import request from '@/utils/request'

export function createList(data: any) {
	return request({
		url: `/api/users`,
		method: 'post',
		data: data
	})
}
