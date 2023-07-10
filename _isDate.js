import isString from './isString'

/**
 * 检测测试数据是否为有效的日期（字符串）
 * ========================================================================
 * @method _isDate
 * @private
 * @param {String} str - 待检测数据（字符串）
 * @returns {Boolean}
 */
const _isDate = (str) => {
  return isString(str) && !isNaN(Date.parse(str))
}

export default _isDate
