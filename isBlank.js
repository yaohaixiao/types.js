import isString from './isString'

/**
 * 检测测试数据是否只包空格
 * ========================================================================
 * @method isBlank
 * @since 0.2.0
 * @category String
 * @param {String} val - 要检测的数据
 * @returns {Boolean} 'val' 只包含空格，返回 true，否则返回 false
 */
function isBlank(val) {
  if (!isString(val)) {
    return false
  }

  return /^\s*$/.test(val)
}

export default isBlank
