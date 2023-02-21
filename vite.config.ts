import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 配置element-plus template的组件自动引入
// js逻辑中使用对象需要单独引入
// 并且样式也需要引入['element-plus/theme-chalk/el-message.css'] 或 使用插件 vite-plugin-style-import 解决样式问题
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		})
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	server: {
		proxy: {
			'/api': {
				// target: 'http://114.115.212.129:8778',
				// target: 'http://codercba.com:8000',
				// target: 'http://coderwhy.dev:8000',
				// target: 'http://codercba.prod:8000',
				// target: 'http://152.136.185.210:4000',
				target: 'http://114.115.212.129:8778',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
})
