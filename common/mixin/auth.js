
/*
 * Copyright (c) ShiJu  2023 - 2023. 适度编码益脑，沉迷编码伤身，合理安排时间，享受快乐生活。
 */

export default {
	onShow() {
		var lim = this.imsdk
		var sdk = lim.im;
		let uid = sdk.getUserId();
		if(uid == '' || uid == undefined){
			uni.navigateTo({
				url: '/pages/common/login/login'
			});
		}
	},
	methods:{
		navigate(path){
			uni.navigateTo({
				url: '/pages/'+path,
			});
		},
		// 返回并提示
		backToast(msg = '非法参数'){
			uni.showToast({
				title: msg,
				icon:"none"
			});
			uni.navigateBack({
				delta: 1,
			});
		}
	}
}