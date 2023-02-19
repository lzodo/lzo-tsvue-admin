// import { Notify } from 'vant'
/**
 * 参数处理
 * @param {*} params  参数
 * 复制来暂用未研究
 */
export function tansParams(params: any) {
	let result = ''
	for (const propName of Object.keys(params)) {
		const value = params[propName]
		let part = encodeURIComponent(propName) + '='
		if (value !== null && value !== '' && typeof value !== 'undefined') {
			if (typeof value === 'object') {
				for (const key of Object.keys(value)) {
					if (value[key] !== null && value[key] !== '' && typeof value[key] !== 'undefined') {
						let params = propName + '[' + key + ']'
						let subPart = encodeURIComponent(params) + '='
						result += subPart + encodeURIComponent(value[key]) + '&'
					}
				}
			} else {
				result += part + encodeURIComponent(value) + '&'
			}
		}
	}
	return result
}

/**
 * 非空验证
 */

export function hasEmaty(options: any) {
	console.log(options)
	let res = Object.keys(options).find((item) => !options[item])
	if (res) {
		console.log({ type: 'warning', message: `参数 ${res} 必传` })
		return true
	} else {
		return false
	}
}

/**
 * 验证是否移动端访问
 */

export function isMobile() {
	let flag = navigator.userAgent.match(
		/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
	)
	return flag
}
