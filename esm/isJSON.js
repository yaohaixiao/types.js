import isString from './isString'
import isBlank from './isBlank'

/**
 * 检测测试数据是否为 JSON 格式字符串数据
 * ========================================================================
 * @method isJSON
 * @param {String} val - 要检测的数据
 * @returns {Boolean} 'val' 是 JSON 格式字符串数据返回 true，否则返回 false
 */
const isJSON = (val) => {
  if (!isString(val) || isBlank(val) || !val) {
    return false
  }

  val = val.replace(/\\(?:(["\\/bfnrt])|(u[0-9a-fA-F]{4}))/g, '@')
  val = val.replace(
    /"[\w\s]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?/g,
    ']'
  )
  val = val.replace(/(?:^|:|,)(?:\s*\[)+/g, '')

  return /^[\],:{}\s]*$/.test(val)
}

export default isJSON
