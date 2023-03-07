<template>
	<div class="base-echerts">
		<div class="echart" ref="echartRef"></div>
	</div>
</template>

<script setup lang="ts">
	import { ref, onMounted, watchEffect } from 'vue'
	import * as echarts from 'echarts'
	import type { EChartsOption } from 'echarts'
	import ChinaJSON from '../data/china.json'
	echarts.registerMap('china', ChinaJSON as any) // 注册一个地图数据

	interface IProps {
		options: EChartsOption
	}
	let props = defineProps<IProps>()

	const echartRef = ref<HTMLElement>()
	onMounted(() => {
		// 基于准备好的dom，初始化echarts实例、设置主题、指定使用canvas渲染引擎
		const echartInstance = echarts.init(echartRef.value!, 'light', { renderer: 'canvas' }) //！强调值不为空
		// 绘制图表, 监听变化更新数据
		watchEffect(() => echartInstance.setOption(props.options))
	})
</script>

<style lang="scss" scoped>
	.base-echerts {
		.echart {
			width: 300px;
			height: 300px;
		}
	}
</style>
