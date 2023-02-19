<template>
	<div>login {{ loginStore.isLogin }}</div>
	<el-button type="warning">Warning</el-button>
	<el-button type="danger">Danger</el-button>
</template>

<script setup lang="ts">
import { verifCode } from '@/service/login'
import useLoginStore from '@/store/login'
let loginStore = useLoginStore()

verifCode().then((res) => {
	console.log(res)
})
</script>

<style scoped></style>
