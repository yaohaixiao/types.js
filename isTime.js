import _isTime from './_isTime'
import _isDate from './_isDate'

/**
 * 检测测试数据是否为有效的时间（字符串）
 * ========================================================================
 * @method isTime
 * @since 1.4.0
 * @param {String} str - （必须）待测试的字符串
 * @param {String} [type] - 测试的时间类型：
 *                          time - 时间；
 *                          date - 日期；
 *                          不传 - 时间或者日期皆可
 * @returns {Boolean} 'val' 是有效的时间（字符串），返回 true，否则返回 false
 */
const isTime = (str, type) => {
  switch (type) {
    case 'time':
      return _isTime(str)
    case 'date':
      return _isDate(str)
    default:
      return _isTime(str) || _isDate(str)
  }
}

export default isTime
