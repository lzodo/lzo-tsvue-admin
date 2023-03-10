<template>
	<div
		class="iframes-page page"
		:class="{ isMobile: iframeType == 'mobile' }"
		v-loading="loading"
		element-loading-background="#fff"
	>
		<div class="warp" :class="{ isMobile: iframeType == 'mobile' }">
			<iframe :src="url" title="description" v-if="showIframe"></iframe>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useRoute } from 'vue-router'
	import { ref, watchEffect } from 'vue'
	const route = useRoute()
	let url = ref()
	const loading = ref(true)

	let iframeType = 'default'
	let showIframe = ref(false)

	watchEffect(() => {
		loading.value = true
		switch (route.params.id) {
			case 'iot':
				iframeType = 'default'
				url.value = 'http://iot.huihezn.com'
				break
			case 'mvue':
				iframeType = 'mobile'
				url.value = 'http://m.vue.lzoxun.top'
				break
			case 'docs':
				iframeType = 'default'
				url.value = 'http://docs.lzoxun.top/docs/other-weblinks/'
				break
			case 'case':
				iframeType = 'default'
				url.value = 'http://case.lzoxun.top'
				break
			// case 'map':
			// 	iframeType = 'default'
			// 	url.value = 'http://case.lzoxun.top'
			// 	break

			default:
				break
		}
		setTimeout(() => {
			loading.value = false
			showIframe.value = true
		}, 500)
	})
</script>

<style lang="scss" scoped>
	.iframes-page {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fff;
		&.isMobile {
			background-color: #333;
		}
	}
	.warp {
		width: 100%;
		height: 100%;
		overflow: hidden;
		&.isMobile {
			width: 375px;
			height: 667px;
		}
	}
	iframe {
		width: 100%;
		height: 100%;
		border: none;
		outline: none;
		display: inline-block;
	}
</style>
