<template>
	<div class="login-dialog-page page">
		<h1 class="title">后台管理系统</h1>
		<el-tabs stretch type="border-card" v-model="tabPaneName" class="tabs">
			<el-tab-pane name="login">
				<!--具名插槽 插槽名label-->
				<template #label>
					<span class="custom-tabs-label">
						<el-icon><UserFilled /></el-icon>
						<span>账号登录</span>
					</span>
				</template>
				<LoginSignIn ref="userSignInRef"></LoginSignIn>
			</el-tab-pane>
			<el-tab-pane name="register">
				<template #label>
					<span class="custom-tabs-label">
						<el-icon><User /></el-icon>
						<span>注册账号</span>
					</span>
				</template>
				<LoginSignup></LoginSignup>
			</el-tab-pane>
		</el-tabs>
		<div class="controls">
			<el-checkbox v-model="isSavePwd" label="记住密码" size="large" @change="changeSaveState" />
			<el-link type="primary" size="large">忘记密码</el-link>
		</div>
		<el-button type="primary" class="login-btn" size="large" @click="submitFrom">立即登录</el-button>
	</div>
</template>

<script setup lang="ts">
	// import { UserFilled, User } from '@element-plus/icons-vue' // 全局注册就不需要了
	import { ref } from 'vue'
	import LoginSignIn from './LoginSignIn.vue'
	import LoginSignup from './LoginSignup.vue'
	import useLoginStore from '@/store/login/login'
	let loginStore = useLoginStore()

	const isSavePwd = ref(true)
	loginStore.savePasswdActive(isSavePwd.value)
	const changeSaveState = () => {
		loginStore.savePasswdActive(isSavePwd.value)
	}

	const tabPaneName = ref('login')
	const userSignInRef = ref<InstanceType<typeof LoginSignIn>>() // 我们为了智能提示，需要拿到相关组件导出的实例的类型(LoginSignIn 可以看成一个构造器)
	const submitFrom = () => {
		if (tabPaneName.value == 'login') {
			userSignInRef.value?.loginAction() // 需要子组件通过 loginAction 暴露才能调用
		} else {
			console.log('userIs 注册')
		}
	}
</script>

<style lang="scss" scoped>
	.login-dialog-page {
		width: 330px;
		height: 200px;
		margin-bottom: 150px; // 居中的同时往上走移动
		// background-color: var(--main-color);
		.title {
			text-align: center;
		}
		.tabs {
			margin: 20px 0 0px;
		}
		.controls {
			display: flex;
			justify-content: space-between;
		}
		.login-btn {
			width: 100%;
			--el-button-size: 35px; // large 的时候ui是设置 --el-button-size: 40px; 改变 --el-button-size 就可以改变按钮字体大小
		}
	}

	.el-icon {
		position: relative;
		top: 1px;
		left: -3px;
	}
</style>
