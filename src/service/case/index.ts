import request from '@/utils/request'

export function imageUploadApi(data: any) {
	console.log(data, 555)

	return request({
		url: '/api/uploads/avatar',
		headers: {
			notToken: false, // 是否不需要token
			'Content-Type': 'multipart/form-data',
			formData: true
		},
		method: 'post',
		data: data
	})
}

//https://documenter.getpostman.com/view/12387168/TzzDKb12
