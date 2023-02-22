import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' // pinia 数据持久化 , use一下，然后在需要持久的仓库设置 persist: true

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export default pinia
