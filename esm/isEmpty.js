import isString from './isString'

/**
 * 检测测试数据是否为空字符串
 * ========================================================================
 * @method isEmpty
 * @param {String} val - 要检测的数据
 * @returns {Boolean} 'val' 是空字符串返回 true，否则返回 false
 */
const isEmpty = (val) => {
  return isString(val) && val === ''
}

export default isEmpty
