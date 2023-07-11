import isString from './isString'

/**
 * 检测测试数据是否为 16 进制编码的字符串
 * ========================================================================
 * @method isHex
 * @param {String} val - 要检测的数据
 * @returns {Boolean} 'val' 是 16 进制编码的字符串，返回 true，否则返回 false
 */
const isHex = (val) => {
  const REGEXP_HEX = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
  return isString(val) && REGEXP_HEX.test(val)
}

export default isHex
