<template>
	<div class="base-echerts">
		<div class="echart" ref="echartRef"></div>
	</div>
</template>

<script setup lang="ts">
	import { ref, onMounted, watchEffect } from 'vue'
	import * as echarts from 'echarts'
	import type { EChartsOption } from 'echarts'

	// http://datav.aliyun.com/portal/school/atlas/area_selector 获取地图数据
	import ChinaJSON from '../data/china.json'
	import ShaxianJSON from '../data/shaxian.json'

	interface IProps {
		options: EChartsOption
		mapType: String
	}
	let props = defineProps<IProps>()

	if (props.mapType == 'china') {
		echarts.registerMap('china', ChinaJSON as any) // 注册一个地图数据
	} else if (props.mapType == 'shaxian') {
		echarts.registerMap('shaxian', ShaxianJSON as any)
	}

	console.log(props, 999)

	const echartRef = ref<HTMLElement>()
	onMounted(() => {
		// 基于准备好的dom，初始化echarts实例、设置主题、指定使用canvas渲染引擎
		let echartInstance = echarts.init(echartRef.value!, 'light', { renderer: 'canvas' }) //！强调值不为空
		// 绘制图表, 监听变化更新数据
		watchEffect(() => echartInstance.setOption(props.options))

		// 窗口变化重新加载
		// window.onresize = function () {
		// 	console.log('fdsfdsfsddd')
		// 	echartInstance.resize()
		// }
		window.addEventListener('resize', function () {
			echartInstance.resize()
		})
	})
</script>

<style lang="scss" scoped>
	.base-echerts {
		.echart {
			width: 100%;
			height: 100%;
			min-width: 300px;
			min-height: 400px;
		}
	}
</style>
