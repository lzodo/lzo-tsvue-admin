<template>
	<div class="breadcrumb">
		<!--全局注册了图标，所有分隔符可以直接传字符串, 直接字符串 分割separator="|" -->
		<el-breadcrumb separator-icon="ArrowRight">
			<el-breadcrumb-item :to="{ path: item.path }" v-for="item in breadList" :key="item.id">{{ item.name }}</el-breadcrumb-item>
			<!-- <el-breadcrumb-item>{{ breadList }}</el-breadcrumb-item> -->
		</el-breadcrumb>
	</div>
</template>

<script setup lang="ts">
	import useLoginStore from '@/store/login/login'
	import { mapPathTbBreadcrumb } from '@/utils/map-menus'
	import { computed } from 'vue'
	import { useRoute } from 'vue-router'
	const route = useRoute()
	const loginStore = useLoginStore()

	// 计算属性，当里面用到的依赖发生改变，自动重新执行
	let breadList = computed(() => {
		return mapPathTbBreadcrumb(route.path, loginStore.userMenus)
	})
	console.log(breadList)
</script>

<style lang="scss" scoped></style>
