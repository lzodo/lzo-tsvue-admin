<template>
	<div class="page-search">
		<el-form :model="searchData" label-width="90px" ref="ruleFormRef">
			<el-row :gutter="20">
				<el-col :span="8">
					<el-form-item label="账号" prop="name">
						<el-input v-model="searchData.name" placeholder="请输入账号" />
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<el-form-item label="昵称" prop="displayName">
						<el-input v-model="searchData.displayName" placeholder="请输入昵称" />
					</el-form-item>
				</el-col>
			</el-row>
		</el-form>
		<div class="btns">
			<el-button icon="Refresh" @click="onRefresh">重置</el-button>
			<el-button type="primary" icon="Search" @click="onSearch">提交</el-button>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { reactive, ref } from 'vue'
	import type { ElForm } from 'element-plus'

	const searchData = reactive({
		name: '',
		displayName: ''
	})
	let emit = defineEmits(['handleSearchClick'])

	// let ruleFormRef = ref<FormInstance>() //文档里提供的类型 InstanceType<typeof ElForm> == FormInstance
	let ruleFormRef = ref<InstanceType<typeof ElForm>>()
	const onRefresh = () => {
		// searchData.name = '' // 手动重置
		ruleFormRef.value?.resetFields() // 必须 prop属性绑定的属性才生效
		emit('handleSearchClick', searchData)
	}

	const onSearch = () => {
		emit('handleSearchClick', searchData)
	}
</script>

<style lang="scss" scoped>
	.page-search {
		padding: 10px;
		background-color: #fff;
		border-radius: 5px 5px 0 0;
	}
	.btns {
		text-align: right;
	}
</style>
