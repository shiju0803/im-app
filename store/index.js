/*
 * Copyright (c) ShiJu  2023 - 2023. 适度编码益脑，沉迷编码伤身，合理安排时间，享受快乐生活。
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import common from '@/store/modules/common.js';

export default new Vuex.Store({
	modules:{
		common
	}
})