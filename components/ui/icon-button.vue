<!--
  - Copyright (c) ShiJu  2023 - 2023. 适度编码益脑，沉迷编码伤身，合理安排时间，享受快乐生活。
  -->

<template>
	<view class="flex align-center justify-center" 
	hover-class="bg-hover-light" @click="$emit('click')"
	style="height: 90rpx;width: 90rpx;">
		<text class="iconfont font-md">{{icon}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			icon: {
				type: String,
				default: ''
			},
		},
	}
</script>

<style>
</style>
