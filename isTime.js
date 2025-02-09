import _isTime from './utils/_isTime'
import _isDate from './utils/_isDate'

/**
 * 检测测试数据是否为有效的时间（字符串）
 * ========================================================================
 * @method isTime
 * @since 1.4.0
 * @category String
 * @param {*} val - （必须）待测试的字符串
 * @param {String} [type] - 测试的时间类型：
 *                          time - 时间；
 *                          date - 日期；
 *                          不传 - 时间或者日期皆可
 * @returns {Boolean} 'val' 是有效的时间（字符串），返回 true，否则返回 false
 * @example
 *
 * let chinese
 *
 * // 非字符串
 * isTime(123) // -> false
 * isTime(false) // -> false
 * isTime(null) // -> false
 * isTime(chinese) // -> false
 * isTime(Symbol('symbol')) // -> false
 * isTime(BigInt(42)) // -> false
 * isTime({}) // -> false
 * isTime([]) // -> false
 * isTime(() => {}) // -> false
 *
 * // 字符串
 * isTime('time') // -> false
 *
 * // 时间
 * // 12小时格式时间
 * isTime('1:23', 'time') // -> true
 * isTime('01:23', 'time') // -> true
 * isTime('11:23 am', 'time') // -> true
 * isTime('11:23 AM', 'time') // -> true
 * isTime('11:23 pm', 'time') // -> true
 * isTime('5:23 PM', 'time') // -> true
 *
 * isTime('23:01 pm', 'time') // -> false
 *
 * // 24小时格式时间
 * isTime('3:34', 'time') // -> true
 * isTime('03:45', 'time') // -> true
 * isTime('18:16:01', 'time') // -> true
 * isTime('23:34:59', 'time') // -> true
 *
 * isTime('03:60', 'time') // -> false
 * isTime('24:01', 'time') // -> false
 *
 * // 日期
 * isTime('2001.01.01') // -> true
 * isTime('2001/01/01') // -> true
 * isTime('2001-01-01') // -> true
 * isTime('2001-01-32') // -> false
 * isTime('2001-13-00') // -> false
 *
 * isTime('01.01.2001') // -> true
 * isTime('01/11/2001') // -> true
 * isTime('31-12-2001') // -> true
 * isTime('31-13-2001') // -> false
 * isTime('32.12.2001') // -> false
 *
 * isTime('Jul 08 2023 11:15:11', 'date') // -> true
 * isTime('Jul 32 2023 11:15:34', 'date') // -> false
 */
const isTime = (val, type) => {
  switch (type) {
    case 'time':
      return _isTime(val)
    case 'date':
      return _isDate(val)
    default:
      return _isTime(val) || _isDate(val)
  }
}

export default isTime
