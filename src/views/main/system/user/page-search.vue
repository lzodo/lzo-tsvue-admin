<template>
	<div class="page-search">
		<el-form :model="searchData" label-width="90px" ref="ruleFormRef">
			<el-row :gutter="20">
				<el-col :span="8">
					<el-form-item label="用户名" prop="nickname">
						<el-input v-model="searchData.nickname" placeholder="请输入用户名" />
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<el-form-item label="真实姓名" prop="realname">
						<el-input v-model="searchData.realname" placeholder="请输入真实性" />
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<el-form-item label="电话号码" prop="phone">
						<el-input v-model="searchData.phone" placeholder="请输入电话号码" />
					</el-form-item>
				</el-col>

				<el-col :span="8">
					<el-form-item label="状态" prop="state">
						<el-select v-model="searchData.state" placeholder="请选择状态" style="width: 100%">
							<el-option label="开启" :value="1" />
							<el-option label="关闭" :value="0" />
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<el-form-item label="创建时间" prop="dates">
						<el-date-picker
							v-model="searchData.dates"
							type="daterange"
							start-placeholder="开始时间"
							end-placeholder="结束时间"
							:default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]"
						/>
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
	import type { ElForm, FormInstance } from 'element-plus'

	const searchData = reactive({
		nickname: '',
		realname: '',
		phone: '',
		state: '',
		dates: ''
	})

	// let ruleFormRef = ref<FormInstance>() //文档里提供的类型 InstanceType<typeof ElForm> == FormInstance
	let ruleFormRef = ref<InstanceType<typeof ElForm>>()
	const onRefresh = () => {
		// searchData.name = '' // 手动重置
		ruleFormRef.value?.resetFields() // 必须 prop属性绑定的属性才生效
	}
	const onSearch = () => {}
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
