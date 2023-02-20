<template>
	<div class="login-page page">login {{ loginStore.isLogin }}</div>
</template>

<script setup lang="ts">
import { verifCode } from '@/service/login'
import useLoginStore from '@/store/login'
let loginStore = useLoginStore()

verifCode().then((res) => {
	console.log(res)
})
</script>

<style scoped>
.login-page{
	background-color: #f00;
}
</style>
