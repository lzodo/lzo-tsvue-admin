<template>
	<div class="modal-dialog">
		<!--
			 v-model  // 控制弹窗显示隐藏
		-->
		<el-dialog v-model="centerDialogVisible" title="新增" width="50%" center>
			<span> 内容 </span>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="centerDialogVisible = false">取消</el-button>
					<el-button type="primary" @click="centerDialogVisible = false"> 确定 </el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue'

	const centerDialogVisible = ref(false)

	const showDialog = () => {
		centerDialogVisible.value = true
	}

	defineExpose({
		showDialog
	})
</script>

<style lang="scss" scoped></style>
