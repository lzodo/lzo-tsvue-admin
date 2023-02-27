<template>
	<div class="user-page page">
		<PageSearch @handleSearchClick="handleSearchClick"></PageSearch>
		<div class="tables">
			<UserContent ref="tableRef"></UserContent>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import PageSearch from './page-search.vue'
	import UserContent from './user-content.vue'

	const tableRef = ref<InstanceType<typeof UserContent>>()
	const handleSearchClick = (data: any) => {
		tableRef.value?.getData(data)
	}
</script>

<style lang="scss" scoped>
	.user-page {
		padding: 0 20px;
		overflow: auto;
	}
	.page-search {
		margin: 20px 0;
	}
	// .tables {
	// 	padding-left: 20px;
	// }
</style>
