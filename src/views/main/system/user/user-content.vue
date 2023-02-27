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
					<!--作用域插槽 组件内的数据向外传递-->
					<template v-slot="scope">
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
			<!--
				current-page 表示当前页码（pageNumber）
				page-size 表示每页的个数
				page-sizes='[7,10,20]' // 每页个数选择layout加上sizes, 添加 @size-change
				total 设置一共多少数据
			-->
			<el-pagination
				:page-size="pageSize"
				:current-page="pageNumber"
				:page-sizes="[7, 10, 20]"
				layout="prev, sizes, pager, next"
				:total="total"
				@current-change="changeNumber"
				@size-change="changeSize"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { queryList } from '@/service/main/user/user'
	import { reactive, ref } from 'vue'
	import { formatUTC } from '@/utils/format'

	let pageSize = ref(3)
	let pageNumber = ref(1)
	let total = 0
	let searchData = {}

	const datex = formatUTC('2022-10-20T01:14:51.000Z')
	console.log(datex)

	const changeNumber = (value: any) => {
		pageNumber.value = value
		getData()
	}

	const editItem = (row: any) => {
		console.log(row)
	}

	let tableData: any = reactive({ list: [] })
	const getData = async (data?: any) => {
		if (data) {
			pageNumber.value = 1
			searchData = data
		}
		let res = await queryList(Object.assign({ pageSize: pageSize.value, pageNumber: pageNumber.value }, searchData))
		tableData.list = res.result.list
		total = res.result.totalCount
	}
	getData()

	const changeSize = (val: number) => {
		pageSize.value = val
		pageNumber.value = 1
		getData()
	}

	defineExpose({
		getData
	})
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
