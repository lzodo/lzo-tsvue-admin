<template>
	<div class="main-menu">
		<Logo></Logo>
		<el-scrollbar>
			<Menu></Menu>
		</el-scrollbar>
	</div>
</template>

<script setup lang="ts">
	import Logo from './logo-cpn.vue'
	import Menu from './menus-cpn.vue'
</script>

<style lang="scss" scoped>
	.main-menu {
		height: 100%;
		overflow: hidden;
		background-color: var(--menu-bg);
		display: flex;
		flex-direction: column;
	}
</style>
