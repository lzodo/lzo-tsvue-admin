<template>
	<div class="login-page page">
		<rotateCube class="rotate-cube"></rotateCube>
		<LoginPanel></LoginPanel>
	</div>
</template>

<script setup lang="ts">
	import LoginPanel from './login-panel/login-panel.vue'
	import rotateCube from '@/components/AnimateCss3/rotate-cube.vue'
</script>

<style lang="scss" scoped>
	.login-page {
		background-color: #ebe0e0;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url('../../assets/img/login-bg.jpg');
	}
	.rotate-cube {
		position: absolute;
		left: 100px;
		top: 100px;
	}
</style>
