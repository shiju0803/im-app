<!--
  - Copyright (c) ShiJu  2023 - 2023. 适度编码益脑，沉迷编码伤身，合理安排时间，享受快乐生活。
  -->

<template>
	<view :style="getStyle"></view>
	
</template>

	
<script>
	export default {
		props: {
			color:{
				type:String,
				default:"#EFEDE9"
			}
		},
		computed: {
			getStyle(){
				return `height: 18rpx;background-color: ${this.color}rpx`
			}
		},
		methods: {
		},
	}
</script>

<style>
</style>
