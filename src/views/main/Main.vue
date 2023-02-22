<template>
	<div class="main-page page common-layout">
		<!--使用 Container 布局容器 组件布局-->
		<el-container>
			<el-aside>
				<MainMenu></MainMenu>
			</el-aside>
			<el-container>
				<el-header>
					<MainHeader></MainHeader>
				</el-header>
				<el-main>
					<MainCentent></MainCentent>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script setup lang="ts">
	import MainMenu from '@/components/MainMenu/index.vue'
	import MainHeader from '@/components/MainHeader/index.vue'
	import MainCentent from '@/components/MainCentent/index.vue'
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
	}
	.el-container {
		height: 100%;
	}
</style>
