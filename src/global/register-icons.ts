// 全局注册 element icon图标组件，也可以组件中单独映入
// 通过use 自动调用函数并拿到 app

import type { App } from 'vue' // 可以不用这个使用any（提示、类型检测没那么友好），type作用是从另一个模块中导入【数据类型】
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

function registerIcons(app: App) {
	for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
		app.component(key, component)
	}
}

export default registerIcons
