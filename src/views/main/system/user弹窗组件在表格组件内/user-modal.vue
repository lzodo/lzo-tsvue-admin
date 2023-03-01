<template>
	<div class="modal-dialog">
		<!--
			 v-model  // 控制弹窗显示隐藏
		-->
		<el-dialog v-model="centerDialogVisible" :title="isNewInfo ? '新增' : '编辑'" width="50%" center>
			<el-form label-width="100px" :model="fromData" style="max-width: 460px">
				<el-form-item label="账号" prop="name">
					<el-input v-model="fromData.name" :disabled="!isNewInfo" />
				</el-form-item>
				<el-form-item label="昵称">
					<el-input v-model="fromData.displayName" prop="displayName" />
				</el-form-item>
				<el-form-item label="密码" prop="passwd" v-if="isNewInfo">
					<el-input v-model="fromData.passwd" />
				</el-form-item>
				<el-form-item label="性别" prop="sex">
					<el-radio-group v-model="fromData.sex" class="ml-4">
						<el-radio label="男">男</el-radio>
						<el-radio label="女">女</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="头像" prop="headurl">
					<!-- <el-input v-model="fromData.headurl" /> -->
					<AvatarImg
						v-if="centerDialogVisible"
						@getAvatarUrl="getAvatarUrl"
						:default-url="fromData.headurl"
					></AvatarImg>
				</el-form-item>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="centerDialogVisible = false">取消</el-button>
					<el-button type="primary" @click="submitFrom"> 确定 </el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script setup lang="ts">
	import { ref, reactive } from 'vue'
	import AvatarImg from '@/components/FileUpload/avatar-img.vue'
	import useUserStore from '@/store/main/user/user'
	const userStore = useUserStore()
	let isNewInfo = ref(true)

	let fromData = reactive<any>({
		name: '',
		displayName: '',
		passwd: '',
		sex: '男',
		headurl: ''
	})

	const centerDialogVisible = ref(false)
	const showDialog = (isNew: boolean, data?: any) => {
		isNewInfo.value = isNew
		if (isNew) {
			fromData = reactive({ sex: '男' })
		} else {
			fromData = data
		}
		centerDialogVisible.value = true
	}

	const getAvatarUrl = (url: string) => {
		fromData.headurl = url
	}

	const submitFrom = async () => {
		console.log(fromData)

		if (isNewInfo.value) {
			await userStore.createUserList(fromData)
		} else {
			await userStore.modifyUserList(fromData.id, fromData)
		}
		centerDialogVisible.value = false
	}

	defineExpose({
		showDialog
	})
</script>

<style lang="scss" scoped></style>
