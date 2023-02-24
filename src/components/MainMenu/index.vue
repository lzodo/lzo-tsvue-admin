<template>
	<div class="main-menu">
		<div>
			<ul>
				<li></li>
			</ul>
		</div>
		<Logo></Logo>
		<el-scrollbar>
			<Menu></Menu>
		</el-scrollbar>
	</div>
	<div class="m2">
		<div class="ll"></div>
	</div>
</template>

<script setup lang="ts">
	import Logo from './logo-cpn.vue'
	import Menu from './menus-cpn.vue'
</script>

<style lang="scss" scoped>
	.main-menu {
		height: 100%;
		overflow: hidden;
		background-color: var(--menu-bg);
		display: flex;
		flex-direction: column;
	}

	/*
	scoped    以前的 /deep/
		vue 中 设置scoped , 就会在该组件最顶层元素添加 自定义属性 data-v-xxxxxxx
		所有子元素也会添加上同样的 data-v-xxxxxxx
		嵌套的组件,如果是单根元素，也会添加同样的 data-v-xxxxxxx，如果有多个根节点增不会有
		所以 scoped 的样式某个组件中，可以设置存在 data-v-xxxxxxx 节点的样式(包括本组件所有元素与嵌套组件根元素)
		如果 向设置嵌套组件里面的其他元素 需要用 :deep('选择器') 才能深度设置

		如果是挂载到 #app 外面的元素，需要 :global('选择器') 才能设置
		global 全局生效（有时候组件会被挂载到 #app 外面，组件app里面deep是拿不到的，就需要用global了

		如果页面中嵌套logo组件，并且logo组件唯一根元素的class是logo
		.logo { //有效
			:deep(.font) {
				background-color: #f0f;
			}
		}
		:deep(.logo) { // 有效
			.font {
				background-color: #f0f;
			}
		}

		.logo { // 无效
			.font {
				background-color: #f0f;
			}
		}
	*/
</style>
