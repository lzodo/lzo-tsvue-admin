<template>
	<div class="logo">
		<div class="img">
			<img :src="imgurl" />
		</div>
		<div class="font" v-show="!mainStore.isCollapse">后台管理系统</div>
	</div>
</template>

<script setup lang="ts">
	import imgurl from '@/assets/img/logo.svg'
	import useMainStore from '@/store/main/main'

	let mainStore = useMainStore()
</script>

<style lang="scss" scoped>
	.logo {
		height: var(--layout-header-height);
		display: flex;
		border-bottom: 1px solid #333;
		.img {
			width: var(--layout-header-height);
			padding: 15px;
			img {
				width: 100%;
			}
		}
		.font {
			flex: 1;
			color: #fff;
			line-height: var(--layout-header-height);
		}
	}
</style>
