<!--
  - Copyright (c) ShiJu  2023 - 2023. 适度编码益脑，沉迷编码伤身，合理安排时间，享受快乐生活。
  -->

<template>
	<view class="rounded mr-2 px-2 py-1"
	@click="clickEvent"
	:class="disabled ? 'bg-light border' : 'main-bg-color'">
		<text class="font"
		:class="disabled ? 'text-light-muted':'text-white'">{{name}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			name: {
				type: String,
				default: ""
			},
			disabled:{
				type:Boolean,
				default:false
			}
		},
		methods: {
			clickEvent() {
				console.log("clickEvent")
				if(!this.disabled){
					this.$emit('click')
				}
			}
		},
	}
</script>

<style>
</style>
