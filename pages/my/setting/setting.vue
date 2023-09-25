<!--
  - Copyright (c) ShiJu  2023 - 2023. 适度编码益脑，沉迷编码伤身，合理安排时间，享受快乐生活。
  -->

<template>
	<view class="page">
		<!-- 导航栏 -->
		<nav-bar title="我的设置" showBack :showRight="false"></nav-bar>
		<!-- 退出登录 -->
		<divider></divider>
		<view class="py-3 flex align-center justify-center bg-white" hover-class="bg-light" @click="logout">
			<text class="font-md text-primary">退出登录</text>
		</view>
	</view>
</template>

<script>
	import navBar from "@/components/ui/nav-bar.vue"
	import divider from "@/components/ui/divider.vue"
	import $H from '@/common/lib/request.js';
	export default {
		components: {
			navBar,
			divider
		},
		data() {
			return {

			}
		},
		methods: {
			logout() {
				// 跳转到登录页
				uni.reLaunch({
					url: "/pages/common/login/login"
				})
			}
		}
	}
</script>

<style>

</style>
