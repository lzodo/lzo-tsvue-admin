import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' // pinia 数据持久化 , use一下，然后在需要持久的仓库设置 persist: true
import type { App } from 'vue'
import useLoginStore from './login/login'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

function registerStore(app: App) {
	app.use(pinia)
	// 每次刷新，在路由重新加载前重新注册动态路由
	const loginStore = useLoginStore()
	loginStore.loadDynamicRouter()
}

export default registerStore // 先做一些事情在返回
// export default pinia
