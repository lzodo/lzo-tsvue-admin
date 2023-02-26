/// <reference types="vite/client" />

import type { AxiosRequestConfig } from 'axios'

// 自己定义一个vue文件声明，让vscode提示 vue组件的类型(不配置的话main映入.vue是会报错的)
// TypeScript Vue Plugin (Volar) 让项目自动识别 .vue 文件，也会导致我们配置这个的不生效
declare module '*.vue' {
	import { DefineComponent } from 'vue'
	const src: DefineComponent
	export default src
}

// 处理 类型“AxiosResponse<any, any>”上不存在属性“token”
declare module 'axios' {
	interface AxiosInstance {
		(config: AxiosRequestConfig): Promise<any>
	}
}

declare module 'element-plus/dist/locale/zh-cn.mjs' {
	const src: any
	export default src
}

declare module '*.mjs'
export declare module 'element-plus/dist/locale/zh-cn.mjs'

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

// interface errorCodes {
// 	'401': string
// 	'403': string
// 	'404': string
// 	default: string
// }
