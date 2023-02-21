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

export function userSignin(data: any) {
	return request({
		url: '/api/users/login',
		headers: {
			notToken: true // 是否不需要token
		},
		method: 'post',
		data: data
	})
}

//https://documenter.getpostman.com/view/12387168/TzzDKb12
