import { defineStore } from 'pinia'

const useMainStore = defineStore('main', {
	state: () => ({
		isCollapse: false,
		isHideMenuAndHeader: false
	}),
	actions: {
		changeCollapseAction() {
			this.isCollapse = !this.isCollapse
		}
	}
})

export default useMainStore
