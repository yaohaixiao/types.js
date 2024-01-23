import isString from './isString'

/**
 * 检测测试数据是否仅包含英文字符
 * ========================================================================
 * @method isAlpha
 * @since 2.1.0
 * @param {String} str - 要检测的数据
 * @returns {Boolean} 'str' 仅包含英文字符，返回 true，否则返回 false
 */
const isAlpha = (str) => {
  if (!isString(str)) {
    return false
  }

  return /^[a-zA-Z]*$/.test(str)
}

export default isAlpha
