/*
 * Copyright (c) ShiJu  2023 - 2023. 适度编码益脑，沉迷编码伤身，合理安排时间，享受快乐生活。
 */

import $Time from "@/common/lib/time.js"
export default {
	filters: {
		formatTime(value) {
			return $Time.gettime(value);
		}
	},
}