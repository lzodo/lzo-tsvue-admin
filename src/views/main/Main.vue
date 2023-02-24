<template>
	<div class="main-page page common-layout">
		<!--使用 Container 布局容器 组件布局-->
		<el-container>
			<el-aside :class="{ isCollapse: isCollapse }">
				<MainMenu></MainMenu>
			</el-aside>
			<el-container>
				<el-header>
					<MainHeader @changeMenuState="changeMenuState"></MainHeader>
				</el-header>
				<el-main>
					<!-- <MainCentent></MainCentent> -->
					<!-- 一级路由走 App 里的 router-view -->
					<!-- 不命名的情况下 /main route 的 children 里的二级路由，会跳转到/main 的 router-view 中-->
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script setup lang="ts">
	import MainMenu from '@/components/MainMenu/index.vue'
	import MainHeader from '@/components/MainHeader/index.vue'
	import { ref } from 'vue'

	// 这边可以直接通过pinin设置状态，这边只是为了测试自定义事件
	let isCollapse = ref(false)
	const changeMenuState = (state: boolean) => {
		isCollapse.value = state
	}
</script>

<style lang="scss" scoped>
	.el-header {
		--el-header-padding: 0;
		height: var(--layout-header-height);
	}
	.el-main {
		--el-main-padding: 0;
	}

	.el-aside {
		width: 200px;
		transition: width 0.3s ease;
		&.isCollapse {
			width: 60px;
		}
	}
	.el-container {
		height: 100%;
	}
</style>
