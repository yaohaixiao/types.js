import isString from './isString'

/**
 * 检测是否为正确的 Email 邮箱地址格式
 * ========================================================================
 * @method isEmail
 * @param val
 * @returns {boolean}
 */
const isEmail = (val) => {
  const pattern =
    /^([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$/
  return isString(val) && pattern.test(val)
}

export default isEmail
