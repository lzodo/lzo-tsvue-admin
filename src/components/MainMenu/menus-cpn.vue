<template>
	<el-row class="tac">
		<el-col :span="24">
			<!--
				default-active="1" 默认打开选择的index
				collapse 菜单是否折叠
			-->
			<el-menu
				active-text-color="#ffd04b"
				background-color="var(--main--one-bg)"
				class="el-menu-vertical-demo"
				default-active="3"
				text-color="#fff"
				@open="handleOpen"
				@close="handleClose"
				:collapse="mainStore.isCollapse"
			>
				<el-sub-menu :index="String(item.id)" v-for="item in loginStore.userMenus" :key="item.id">
					<template #title>
						<!-- <el-icon><location /></el-icon> 这里不能用了，使用动态组件，动态生成图标-->
						<el-icon>
							<component :is="item.icon.replace('el-icon', '')"></component>
						</el-icon>
						<span>{{ item.name }}</span>
					</template>
					<!-- :index="String(item.id) + '-' + String(subItem.id)" index 不一定要用他模板的1-1-->
					<el-menu-item :index="String(subItem.id)" v-for="subItem in item.children" :key="subItem.id">
						<template #title>
							<el-icon>
								<component :is="subItem.icon.replace('el-icon', '')"></component>
							</el-icon>
							<span>{{ subItem.name }}</span>
						</template>
					</el-menu-item>
				</el-sub-menu>
			</el-menu>
		</el-col>
	</el-row>
</template>

<script setup lang="ts">
	import useLoginStore from '@/store/login/login'
	import useMainStore from '@/store/main/main'

	let loginStore = useLoginStore()
	let mainStore = useMainStore()

	const handleOpen = (key: string, keyPath: string[]) => {
		console.log(key, keyPath)
	}
	const handleClose = (key: string, keyPath: string[]) => {
		console.log(key, keyPath)
	}
</script>

<style lang="scss" scoped>
	.el-menu {
		border-right: 0;
	}
	// 设置子组件内部类的样式如果无效 不用 /deep/ ，可以 :deep(.xxx) 或 :global(.xxx)
	// deep
	// global 全局生效
</style>
