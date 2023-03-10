<template>
	<div class="side-btns" :class="{ isActive: isActive }" @mouseenter="isActive = true" @mouseleave="isActive = false">
		<div class="handle">
			<el-icon><CaretLeft /></el-icon>
		</div>
		<div class="function">
			<div class="item" @click="fullScreen">
				<el-icon><FullScreen /></el-icon>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, onMounted } from 'vue'
	import useMainStore from '@/store/main/main'
	import screenfull from 'screenfull'
	const mainStore = useMainStore()

	const isActive = ref(false)
	const fullScreen = () => {
		screenfull.toggle() // 切换全屏状态
		mainStore.isHideMenuAndHeader = !mainStore.isHideMenuAndHeader
	}

	onMounted(() => {
		// 监听全屏状态做一些事情
		document.addEventListener('fullscreenchange', function () {
			if (document.fullscreenElement) {
				console.log('进入全屏')
			} else {
				console.log('离开全屏')
				mainStore.isHideMenuAndHeader = false
			}
		})
	})
</script>

<style lang="scss" scoped>
	.side-btns {
		position: fixed;
		top: 80px;
		width: 60px;
		height: 150px;
		z-index: 99;
		right: 0;
		cursor: pointer;
		display: flex;
		align-items: center;
		transition: transform 0.5s ease;
		transform: translateX(45px);
		&.isActive {
			transform: translateX(0px);
		}
		.handle {
			background-color: #ffffff;
			height: 60px;
			width: 15px;
			border-radius: 4px 0 0 4px;
			box-shadow: -1px 0px 3px rgba(0, 0, 0, 20%);
			position: relative;
			right: -2px;
			line-height: 60px;
		}
		.function {
			background-color: #fff;
			flex: 1;
			height: 100%;
			box-shadow: 1px 0px 3px rgba(0, 0, 0, 20%);
			.item {
				border-bottom: 1px dashed #dfdfdf;
				font-size: 25px;
				color: #777;
				line-height: 45px;
				text-align: center;
				&:hover {
					color: rgb(0, 138, 230);
				}
			}
		}
	}
</style>
