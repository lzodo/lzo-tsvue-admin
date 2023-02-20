import { createApp } from 'vue'
import 'normalize.css'
import '@/assets/css/index.scss'
import App from './App.vue'
import router from './router'
import pinia from './store'

let a = {
	c: 1,
	b: 2,
	d: () => { }
}

createApp(App).use(router).use(pinia).mount('#app')
