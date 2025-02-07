import isString from './isString'
import getURLPattern from './utils/getURLPattern'

/**
 * 判断字符串是否为有效的 URL 地址
 * ========================================================================
 * @method isURL
 * @category Lang
 * @param {String} str - 要检测的字符串
 * @returns {Boolean} 'val' 是有效的 URL 字符串格式，返回 true，否则返回 false
 */
const isURL = (str) => {
  const pattern = getURLPattern()

  return isString(str) && !!pattern.test(str)
}

export default isURL
