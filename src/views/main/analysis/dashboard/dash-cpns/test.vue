<template>
	<div class="progress-page">{{ data3 }}</div>
	<div class="progress-page">{{ props.count }}</div>
</template>

<script setup lang="ts">
	import { onMounted, reactive, ref, toRefs, watchEffect } from 'vue'

	let props = defineProps({
		data3: {
			type: Array,
			default: () => []
		},
		count: {
			type: Number
		}
	})

	onMounted(() => {})

	const { data3 } = toRefs(props)
	let count = ref(props.count)
	// console.log(props.data3, 444)
</script>

<style lang="scss" scoped>
	.el-progress--line {
		margin-bottom: 15px;
		width: 250px;
	}
</style>
