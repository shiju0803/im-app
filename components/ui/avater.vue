<!--
  - Copyright (c) ShiJu  2023 - 2023. 适度编码益脑，沉迷编码伤身，合理安排时间，享受快乐生活。
  -->

<template>
	<image :src="src ? src : '/static/images/userpic.png'" mode="widthFix" :style="getStyle" :class="type" @click="clickEvent"></image>
</template>

<script>
	export default {
		props: {
			size:{
				type:[String,Number],
				default:90
			},
			src: {
				type: String,
				default: ""
			},
			type:{
				type:String,
				default:"rounded"
			},
			clickType:{
				type:String,
				default:"none"
			}
		},
		computed: {
			getStyle() {
				return `width: ${this.size}rpx;height: ${this.size}rpx;`
			}
		},
		methods: {
			clickEvent() {
				
				switch (this.clickType){ 
					case 'navigate':
					// console.log(this.clickType)
					uni.navigateTo({
						url: '/pages/mail/user-base/user-base'
					});
						break;
					default:
					this.$emit('click')
						break;
				}
			}
		},
	}
</script>

<style>
</style>
