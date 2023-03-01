<template>
	<div class="avatar">
		<!--
			action 上传图片接口路径
			name   上传图片字段，默认file
			headers 拿来设置token
		-->
		<el-upload
			size="mini"
			class="avatar-uploader"
			name="files"
			:headers="{ token: loginStore.token }"
			:action="$filesUrl + '/uploads/avatar'"
			:show-file-list="false"
			:on-success="handleAvatarSuccess"
			:before-upload="beforeAvatarUpload"
		>
			<img v-if="imageUrl" :src="imageUrl" class="avatar" />
			<el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
		</el-upload>
	</div>
</template>

<script setup lang="ts">
	import useLoginStore from '@/store/login/login'
	import { ElMessage } from 'element-plus'
	import { getCurrentInstance, ref } from 'vue'
	const $filesUrl = getCurrentInstance()?.appContext.config.globalProperties.$filesUrl
	const loginStore = useLoginStore()
	let imageUrl = ref()

	let props = defineProps({
		defaultUrl: {
			type: String,
			default: ''
		}
	})

	if (props.defaultUrl) imageUrl.value = $filesUrl + props.defaultUrl
	console.log(imageUrl.value)

	const beforeAvatarUpload = (rawFile: any) => {
		console.log('图片上传前的操作', rawFile)
		if (rawFile.type !== 'image/jpeg') {
			ElMessage.error('请上传 jpg 图片')
			return false
		}
		return true
	}

	const emit = defineEmits(['getAvatarUrl'])
	const handleAvatarSuccess = (res: any) => {
		console.log('图片上传成功', res)
		imageUrl.value = $filesUrl + res.data.headurl
		emit('getAvatarUrl', res.data.headurl)
	}
</script>

<style lang="scss" scoped>
	.avatar-uploader .avatar {
		width: 120px;
		height: 120px;
		display: block;
	}

	:deep(.avatar-uploader .el-upload) {
		border: 1px dashed var(--el-border-color);
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
		transition: var(--el-transition-duration-fast);
	}

	:deep(.avatar-uploader .el-upload:hover) {
		border-color: var(--el-color-primary);
	}

	:deep(.el-icon.avatar-uploader-icon) {
		font-size: 28px;
		color: #8c939d;
		width: 120px;
		height: 120px;
		text-align: center;
	}
</style>
