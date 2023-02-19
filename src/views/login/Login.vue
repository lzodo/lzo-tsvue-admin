<template>
	<div>login {{ loginStore.isLogin }}</div>
</template>

<script setup lang="ts">
import useLoginStore from '@/store/login'
let loginStore = useLoginStore()
</script>

<style scoped></style>
