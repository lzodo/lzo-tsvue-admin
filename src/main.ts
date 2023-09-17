import { createApp } from 'vue'
import 'normalize.css'
import '@/assets/css/index.scss'
import App from './App.vue'
import router from './router'
import pinia from './store'
import ElementIcons from './global/register-icons'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementIcons)
app.use(pinia)
app.use(router)

app.mount('#app')

app.config.globalProperties.$filesUrl = import.meta.env.VITE_BASEPATH // 模板中可以直接使用
