<template>
	<div class="special-js-page page">
		<MapEchartTest :mapData="[]"></MapEchartTest>
	</div>
</template>

<script setup lang="ts">
	import { MapEchartTest } from '@/components/PageEcharts'
</script>

<style lang="scss" scoped>
	.special-js-page {
		width: 100%;
		height: 100%;
	}
</style>
