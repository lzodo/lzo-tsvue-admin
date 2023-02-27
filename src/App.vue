<template>
	<el-config-provider :locale="zhCn">
		<router-view></router-view>
	</el-config-provider>
</template>

<script setup lang="ts">
	// 自动注册element组件，的国际化设置方式
	// import { ElConfigProvider } from 'element-plus'
	// import zhCn from 'element-plus/dist/locale/zh-cn.mjs' // vite+ts 无法正常识别
	import zhCn from '@/utils/element-plus-zh-cn'
</script>

<style scoped></style>
