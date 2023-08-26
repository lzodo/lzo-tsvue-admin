<template>
	<div class="dashboard-page page">
		<div class="head-count">
			<el-row :gutter="10">
				<el-col :span="6"
					><div class="grid-content ep-bg-purple">
						<!-- <my-progress></my-progress> -->
					</div>
				</el-col>
				<el-col :span="6"><div class="grid-content ep-bg-purple" @click="changeline">统计</div> </el-col>
				<el-col :span="6"><div class="grid-content ep-bg-purple">统计</div> </el-col>
				<el-col :span="6"><div class="grid-content ep-bg-purple">统计</div> </el-col>
			</el-row>
		</div>
		<test :data3="listData3" :count="count"></test>
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
	import MyProgress from './dash-cpns/my-progress.vue'
	import test from './dash-cpns/test.vue'
	import { ref } from 'vue'

	let count = ref(5)
	let listData3 = ref([
		{
			full_name: '张秀妹5',
			phone_number: '',
			job_name: '组长',
			organization_name: '',
			job_type: 1
		}
	])

	//换线
	const changeline = () => {
		let ddd = [
			{
				full_name: '1张秀妹1',
				phone_number: '',
				job_name: '组长',
				organization_name: '',
				job_type: 1
			}
		]
		// setTimeout(() => {
		listData3.value = ddd
		count.value = 10
		console.log(listData3)
		// }, 1000)

		//打开选择批次窗体
		//  refworkshop.value.showDialog()
	}
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
