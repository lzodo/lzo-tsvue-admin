import dayjs from 'dayjs'

/**
 * 将UTC转背景事件
 * @param utcString  // 传入一个0时区 的 UTC时间
 */
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc) // 扩展utc插件
export function formatUTC(utcString: string) {
	return dayjs.utc(utcString).utcOffset(8).format('YYYY-MM-DD HH:mm:ss') // 将UTC时间偏移8个小时，变成北京时间，再格式化
}
