<template>
	<div class="dashboard-page page">
		<div class="head-count">
			<el-row :gutter="10">
				<el-col :span="6"><div class="grid-content ep-bg-purple">统计</div> </el-col>
				<el-col :span="6"><div class="grid-content ep-bg-purple">统计</div> </el-col>
				<el-col :span="6"><div class="grid-content ep-bg-purple">统计</div> </el-col>
				<el-col :span="6"><div class="grid-content ep-bg-purple">统计</div> </el-col>
			</el-row>
		</div>
		<div class="main-echarts">
			<el-row :gutter="10">
				<el-col :md="8" :sm="12" :xs="24">
					<div class="item-echart">
						<PieEchart></PieEchart>
					</div>
				</el-col>
				<el-col :md="8" :sm="12" :xs="24">
					<div class="item-echart">
						<LineEchart></LineEchart>
					</div>
				</el-col>
				<el-col :md="8" :sm="12" :xs="24">
					<div class="item-echart">
						<MapEchart
							:mapData="[
								{ name: '上海', value: 12345 },
								{ name: '贵州', value: 12345 },
								{ name: '广州', value: 12345 }
							]"
						></MapEchart>
					</div>
				</el-col>
				<el-col :md="12" :sm="12" :xs="24">
					<div class="item-echart">
						<KLineEchart></KLineEchart>
					</div>
				</el-col>
				<el-col :md="12" :sm="24" :xs="24">
					<div class="item-echart">
						<BarStackEchart></BarStackEchart>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { PieEchart, LineEchart, MapEchart, KLineEchart, BarStackEchart } from '@/components/PageEcharts'
</script>

<style lang="scss" scoped>
	.head-count {
		padding: 15px;
	}
	.grid-content {
		background-color: #fff;
		height: 100px;
		border-radius: 3px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #777;
	}

	.main-echarts {
		width: 100%;
	}
	.main-echarts {
		.item-echart {
			// margin: 0 10px 10px 0;
			margin-bottom: 10px;
			background-color: #fff;
		}
		// display: flex;
		// flex-wrap: wrap;
		// .item-echart {
		// 	flex: 1;
		// 	min-width: 33.33%;
		// 	margin: 10px;
		// 	background-color: #fff;
		// 	div {
		// 		width: 100%;
		// 	}
		// }
	}
</style>
