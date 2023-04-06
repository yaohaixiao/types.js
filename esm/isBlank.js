import isString from './isString'

/**
 * 检测测试数据是否只包空格
 * ========================================================================
 * @method isBlank
 * @param {*} val - 要检测的数据
 * @returns {boolean} 'val' 只包含空格返回 true，否则返回 false
 */
function isBlank(val) {
  if (!isString(val)) {
    return false
  }

  return /^\s*$/.test(val)
}

export default isBlank
