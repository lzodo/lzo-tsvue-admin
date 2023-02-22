<template>
	<div class="main-page page">
		<div>main {{ loginStore.isSavePasswd }}</div>
	</div>
</template>

<script setup lang="ts">
	import useLoginStore from '@/store/login/login'
	const loginStore = useLoginStore()
</script>

<style lang="scss" scoped></style>
