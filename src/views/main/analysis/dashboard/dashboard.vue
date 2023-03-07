<template>
	<div class="dashboard-page page">
		<div class="head-count">
			<el-row :gutter="10">
				<el-col :span="6"><div class="grid-content ep-bg-purple">22</div> </el-col>
				<el-col :span="6"><div class="grid-content ep-bg-purple">22</div> </el-col>
				<el-col :span="6"><div class="grid-content ep-bg-purple">22</div> </el-col>
				<el-col :span="6"><div class="grid-content ep-bg-purple">22</div> </el-col>
			</el-row>
		</div>
		<div class="main-echarts">
			<PieEchart></PieEchart>
			<LineEchart></LineEchart>
			<MapEchart
				:mapData="[
					{ name: '上海', value: 12345 },
					{ name: '贵州', value: 12345 },
					{ name: '广州', value: 12345 }
				]"
			></MapEchart>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { PieEchart, LineEchart, MapEchart } from '@/components/PageEcharts'
</script>

<style lang="scss" scoped>
	.head-count {
		padding: 15px;
	}
	.grid-content {
		background-color: #fff;
		height: 100px;
		border-radius: 3px;
	}

	.main-echarts {
		width: 100%;
		background-color: #fff;
	}
</style>
