<template>
	<div class="login-page page">
		<LoginPanel></LoginPanel>
	</div>
</template>

<script setup lang="ts">
	import LoginPanel from './login-panel/login-panel.vue'
</script>

<style lang="scss" scoped>
	.login-page {
		background-color: #ebe0e0;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url('../../assets/img/login-bg.jpg');
	}
</style>
