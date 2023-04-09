/// <reference types="vite/client" />

import type { AxiosRequestConfig } from 'axios'

// 处理 类型“AxiosResponse<any, any>”上不存在属性“token”
declare module 'axios' {
	interface AxiosInstance {
		(config: AxiosRequestConfig): Promise<any>
	}
}

declare module '*.mjs'
declare module 'element-plus/dist/locale/zh-cn.mjs'

// 使ts认识 app.config.globalProperties 添加的自定义全局属性
declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$filesUrl: string // 这里填类型
	}
}

// 给window 添加属性
// declare global {
// 	interface Window {
// 		localCatch: any
// 	}
// }
