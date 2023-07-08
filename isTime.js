import isString from './isString'

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
 * @returns {boolean|boolean}
 */
const isTime = (str, type) => {
  const pattern12Hours = /^(0?[1-9]|1[0-2]):[0-5]\d(\s(am|pm|AM|PM))?$/
  const pattern24Hours = /^(0?[1-9]|2[0-3]):([0-5]\d){1,2}$/
  let date

  if (!isString(str)) {
    return false
  }

  date = Date.parse(str)

  switch (type) {
    case 'time':
      return pattern12Hours.test(str) || pattern24Hours.test(str)
    case 'date':
      return !isNaN(date)
    default:
      return (
        pattern12Hours.test(str) || pattern24Hours.test(str) || !isNaN(date)
      )
  }
}

export default isTime
