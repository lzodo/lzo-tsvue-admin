<template>
	<div class="main-header">
		<div class="menu-icon fcxy" @click="changeCollapse">
			<el-icon>
				<component :is="mainStore.isCollapse ? 'Expand' : 'Fold'"></component>
			</el-icon>
		</div>
		<div class="content">
			<HeadBreadcrumb></HeadBreadcrumb>
			<HeadUserinfo></HeadUserinfo>
		</div>
	</div>
</template>

<script setup lang="ts">
	import HeadBreadcrumb from './breadcrumb.vue'
	import HeadUserinfo from './head-userinfo.vue'
	import useMainStore from '@/store/main/main'

	let mainStore = useMainStore()
	const changeCollapse = () => {
		mainStore.changeCollapseAction()
	}
</script>

<style lang="scss" scoped>
	.main-header {
		display: flex;
		height: 100%;
		border-bottom: 1px solid #dfdfdf;
		padding-right: 10px;

		.menu-icon {
			width: var(--layout-header-height);
			font-size: 30px;
			cursor: pointer;
		}
		.content {
			flex: 1;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
</style>
