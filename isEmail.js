import isString from './isString'

/**
 * 检测是否为正确的 Email 邮箱地址格式
 * ========================================================================
 * @method isEmail
 * @category Lang
 * @param {String} val - 要检测的数据
 * @returns {Boolean} 'val' 是 Email 邮箱地址格式，返回 true，否则返回 false
 */
const isEmail = (val) => {
  const pattern =
    /^([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$/
  return isString(val) && pattern.test(val)
}

export default isEmail
