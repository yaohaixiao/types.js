/**
 * 检测是否为正确的 Email 邮箱地址格式
 * ========================================================================
 * @method isEmail
 * @param val
 * @returns {boolean}
 */
const isEmail = (val) => {
  const pattern =
    /^(([^<>()[]\\.,;:\s@"]+(\.[^<>()[]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.、d{1,3}])|(([a-zA-Z\-\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/
  return pattern.test(val)
}

export default isEmail
