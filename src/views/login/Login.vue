<template>
	<div class="login-page page">
		<LoginPanel></LoginPanel>
	</div>
</template>

<script setup lang="ts">
	import { verifCode } from '@/service/login'
	import useLoginStore from '@/store/login'
	import LoginPanel from '@/components/login/LoginPanel.vue'
	let loginStore = useLoginStore()

	verifCode().then((res) => {
		console.log(res)
	})
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
