/*
 * Copyright (c) ShiJu  2023 - 2023. 适度编码益脑，沉迷编码伤身，合理安排时间，享受快乐生活。
 */

import Vue from 'vue'
import App from './App'
import store from './store';

Vue.prototype.$store = store
Vue.config.productionTip = false

const sdk = require("@/common/imSdk/lim-sdk.js");
const lim = require("@/common/imSdk/sdk-bridge.js");

uni.lim = lim;
App.mpType = 'app'

Vue.prototype.imsdk = lim


const app = new Vue({
	store,
    ...App
})
app.$mount()
