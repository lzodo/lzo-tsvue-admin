<template>
	<div class="progress-page">
		<el-progress :percentage="progressCount" />
		<el-button size="small" @click="onEnd">进度完成触发结束</el-button>
		<el-button size="small" @click="onReload">重新加载</el-button>
	</div>
</template>

<script setup lang="ts">
	// 得到一个永远到不了1的递增数值
	import FakeProgress from 'fake-progress'
	import { ref } from 'vue'
	let progressCount = ref(0)

	let p = new FakeProgress({
		timeConstant: 10000,
		autoStart: true
	})
	var onEachSecond = function () {
		progressCount.value = Number((p.progress * 100).toString().slice(0, 4))
		console.log(p.progress)
		if (p.progress != 1) {
			requestAnimationFrame(onEachSecond)
		}
	}
	requestAnimationFrame(onEachSecond)

	var onEnd = function () {
		p.end()
	}

	let onReload = function () {
		p = null
		p = new FakeProgress({
			timeConstant: 10000,
			autoStart: true
		})
		console.log(p.progress)
		requestAnimationFrame(onEachSecond)
	}
</script>

<style lang="scss" scoped>
	.el-progress--line {
		margin-bottom: 15px;
		width: 250px;
	}
</style>
