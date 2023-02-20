<template>
	<div class="signin-page page">
		<!-- status-icon 验证的时候输入框后面状态图标 -->
		<el-form
			ref="signInFromRef"
			label-position="right"
			label-width="60px"
			:model="formLabelAlign"
			:rules="rules"
			status-icon
		>
			<el-form-item label="帐号" prop="accountNumber">
				<el-input v-model="formLabelAlign.accountNumber" placeholder="请输入帐号" />
			</el-form-item>
			<el-form-item label="密码" prop="passwd">
				<el-input v-model="formLabelAlign.passwd" placeholder="请输入密码" type="password" show-password />
			</el-form-item>
		</el-form>
	</div>
</template>

<script setup lang="ts">
	import type { FormRules, ElForm } from 'element-plus'
	import { ref, reactive } from 'vue'

	let formLabelAlign = reactive({ accountNumber: '', passwd: '' })
	const rules = reactive<FormRules>({
		accountNumber: [
			{ required: true, message: '请输入账号', trigger: 'blur' },
			{ min: 2, max: 12, message: '必须是2~12位', trigger: 'blur' },
			{ pattern: /^[0-9za-zA-Z]{2,12}$/, message: '必须数字或字母组成', trigger: 'blur' }
		],
		passwd: [{ required: true, message: '请输入密码', trigger: 'blur' }]
	})

	const signInFromRef = ref<InstanceType<typeof ElForm>>()
	// 登录操作
	const loginAction = () => {
		signInFromRef.value?.validate((valid) => {
			if (valid) {
				console.log('数据验证成功')
			} else {
				console.log('请输入正确数据')
			}
		})
	}

	// 导出
	defineExpose({
		loginAction
	})
</script>

<style lang="scss" scoped></style>
