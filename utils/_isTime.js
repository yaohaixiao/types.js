import isString from '../isString'

/**
 * 检测测试数据是否为有效的时间（字符串）
 * ========================================================================
 * @method _isTime
 * @private
 * @param {String} str - 待检测数据（字符串）
 * @returns {Boolean}
 */
const _isTime = (str) => {
  const pattern12Hours = /^(0?[1-9]|1[0-2]):[0-5]\d(\s(am|pm|AM|PM))?$/
  const pattern24Hours = /^(0?[1-9]|2[0-3]):([0-5]\d){1,2}$/

  return isString(str) && (pattern12Hours.test(str) || pattern24Hours.test(str))
}

export default _isTime
