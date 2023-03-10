<template>
	<div class="head-userinfo">
		<!--这边可以使用element-plus的  Dropdown下拉菜单、Avatar头像组件-->
		<el-dropdown>
			<div class="el-dropdown-link">
				<div class="username">{{ loginStore.userInfo.name }}</div>
				<el-avatar style="float: right" :size="30" :src="$filesUrl + loginStore.userInfo.headurl" />
			</div>
			<template #dropdown>
				<el-dropdown-menu>
					<el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
	</div>
</template>

<script setup lang="ts">
	import router from '@/router'
	import useLoginStore from '@/store/login/login'
	import { localCatch } from '@/utils/catch'
	const loginStore = useLoginStore()
	const loginOut = () => {
		loginStore.token = ''
		loginStore.userInfo = {}
		loginStore.userRoles = {}
		loginStore.userMenus = []
		localCatch.removeItem('token')
		localCatch.removeItem('userInfo')
		router.push('/login')
	}
</script>

<style lang="scss" scoped>
	.el-icon--right {
		position: relative;
		top: 3px;
	}
	.el-dropdown-link {
		height: 30px;
		line-height: 20px;
		display: flex;
		.username {
			margin-top: 5px;
			height: 20px;
			background-color: rgb(176, 193, 95);
			position: relative;
			right: -10px;
			padding: 0 20px;
			border-radius: 3px;
			color: #fff;
			text-align: center;
			font-size: 12px;
			transform: translateX(90px);
			animation: showName 1s ease 0.5s forwards;
		}
		.el-avatar {
			position: relative;
			z-index: 998;
			animation: rotate360 1s 0s;
		}
	}
	@-webkit-keyframes rotate360 {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	@-webkit-keyframes showName {
		0% {
			transform: translate(90px);
		}

		100% {
			transform: translate(0px);
		}
	}
</style>
