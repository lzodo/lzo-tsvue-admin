import request from '@/utils/request'

// 图形码
// export function verifCode() {
// 	return request({
// 		url: '/api/users/verifCode',
// 		headers: {
// 			notToken: true // 是否不需要token
// 		},
// 		method: 'get'
// 	})
// }

export function verifCode() {
	return request({
		url: '/api/home/multidata',
		headers: {
			notToken: true // 是否不需要token
		},
		method: 'get'
	})
}

//https://documenter.getpostman.com/view/12387168/TzzDKb12
