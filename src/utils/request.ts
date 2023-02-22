import axios from 'axios'
import { tansParams } from './tool'
import errorCode from '@/utils/errorCode'
import { localCatch } from './catch'

// vite 用 import.meta.env.MODE 代替 process.env.NODE_ENV
console.log(import.meta.env.BASE_URL) // baseurl
console.log(import.meta.env.DEV) // 是否是开发环境
console.log(import.meta.env.MODE) // vite 直接通过这个判断  production/development 生产或开发模式
console.log(import.meta.env.PROD) // 是否是生产环境
console.log(import.meta.env.SSR) // 是否SSR环境

let baseURL = '/'
if (import.meta.env.MODE === 'production') {
	// baseURL = 'http://codercba.com:8000' // process.env 在vite4 中不支持生产环境，只支持开发环境
	baseURL = 'http://codercba.com:8000' // process.env 在vite4 中不支持生产环境，只支持开发环境
}

const service = axios.create({
	baseURL,
	timeout: 10000
})

// request拦截器
service.interceptors.request.use(
	(config) => {
		if (!config.headers.notToken) {
			config.headers.token = localCatch.getItem('token')
		}

		if (import.meta.env.MODE === 'production') {
			config.url = (config.url as string).replace(/^\/api/, '')
		}

		// get请求映射params参数
		if (config.method === 'get' && config.params) {
			console.log(config.url, 'config.url')
			let url = config.url + '?' + tansParams(config.params)
			url = url.slice(0, -1)
			config.params = {}
			config.url = url
		}

		console.log(config)
		return config
	},
	(error) => {
		console.log(error)
		Promise.reject(error)
	}
)

// 响应拦截器
service.interceptors.response.use(
	(res) => {
		// 未设置状态码则默认成功状态
		const code = res.data.code || 200
		// 获取错误信息
		const msg = res.data.msg || errorCode['default']
		// 二进制数据则直接返回
		if (res.request.responseType === 'blob' || res.request.responseType === 'arraybuffer') {
			return res.data
		}
		if (code === 401) {
			console.log('==401', msg)
			return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
		} else if (code === 500) {
			console.log('==500', msg)
			if (!res.config.headers.noterrdialog) {
				console.log(msg)
			}
			return Promise.reject(new Error(msg))
		} else if (code !== 200) {
			console.log('!=200', msg)
			ElMessage.error(msg)
			if (!res.config.headers.noterrdialog) {
				console.log(msg)
			}
			return Promise.reject(new Error(msg))
		} else {
			if (res.config.headers.successdialog) {
				let dialogMsg = res.config.headers.successMsg || '操作成功'
				console.log({ type: 'success', message: decodeURIComponent(dialogMsg) })
			}
			return res.data
		}
	},
	(error) => {
		console.log('err' + error)
		let { message } = error
		if (message == 'Network Error') {
			message = '后端接口连接异常'
		} else if (message.includes('timeout')) {
			message = '系统接口请求超时'
		} else if (message.includes('Request failed with status code')) {
			message = '系统接口' + message.substr(message.length - 3) + '异常'
		}

		console.log({
			message: message,
			duration: 5000
		})

		console.log(message)
		return Promise.reject(error)
	}
)

export default service
