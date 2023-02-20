import { createApp } from 'vue'
import 'normalize.css'
import '@/assets/css/index.scss'
import App from './App.vue'
import router from './router'
import pinia from './store'
import ElementIcons from './global/register-icons'

createApp(App).use(ElementIcons).use(router).use(pinia).mount('#app')
