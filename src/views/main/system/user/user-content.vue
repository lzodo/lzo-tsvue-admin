<template>
	<div class="page-content">
		<div class="header">
			<h3>用户列表</h3>
			<el-button type="success" icon="Plus">新增</el-button>
		</div>
		<div class="table">
			<!--
				width="50px" 设置列宽，再将没有宽度的平均分配
				align="center" 文字居中
			-->
			<el-table :data="tableData.list" style="width: 100%" border>
				<el-table-column align="center" type="selection" width="50px" />
				<el-table-column align="center" type="index" width="60px" label="序号" />
				<el-table-column align="center" prop="name" label="账号" width="120px" />
				<el-table-column align="center" prop="displayName" label="显示名称" width="120px" />
				<el-table-column align="center" prop="sex" label="性别" width="60px" />
				<el-table-column prop="headurl" label="头像">
					<template #default="scope">
						<img style="width: 30px" :src="$filesUrl + '' + String(scope.row.headurl)" alt="" />
					</template>
				</el-table-column>
				<el-table-column prop="headurl" label="操作" width="180px">
					<template #default="scope">
						<el-button text size="small" class="edit" type="primary" icon="Edit" @click="editItem(scope.row)">编辑</el-button>
						<el-button text size="small" class="delete" type="danger" icon="Delete">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div class="pagination">
			<el-pagination :page-size="pageSize" layout="prev, pager, next" :total="total" @current-change="changeNumber" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { queryList } from '@/service/main/user/user'
	import { reactive, ref, onBeforeMount } from 'vue'
	let pageSize = ref(10)
	let pageNumber = ref(1)
	let total = 0

	const changeNumber = (value: any) => {
		pageNumber.value = value
		getData()
	}

	const editItem = (row: any) => {
		console.log(row)
	}

	let tableData: any = reactive({ list: [] })
	const getData = async () => {
		let res = await queryList({ pageSize: pageSize.value, pageNumber: pageNumber.value })
		tableData.list = res.result.list
		total = res.result.totalCount
	}
	getData()
	// onBeforeMount(async () => {})
</script>

<style lang="scss" scoped>
	.header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
	}
	.page-content {
		background-color: #fff;
		padding: 20px 20px 10px;
		border-radius: 0 0 5px 5px;
	}
	.pagination {
		display: flex;
		justify-content: end;
		margin-top: 10px;
		// float: right;
	}
</style>
