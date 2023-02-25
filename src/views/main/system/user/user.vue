<template>
	<div class="user-page page">
		<PageSearch></PageSearch>
		<div class="tables">
			<UserContent></UserContent>
		</div>
	</div>
</template>

<script setup lang="ts">
	import PageSearch from './page-search.vue'
	import UserContent from './user-content.vue'
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
