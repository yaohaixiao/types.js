import isFunction from './isFunction'

/**
 * 检测测试函数是否为构造函数
 * ========================================================================
 * @method isConstructor
 * @param {function} fn - 要测试的（构造）函数
 * @returns {boolean} - fn 是构造函数返回 true，否则返回 false;
 */
const isConstructor = (fn) => {
  let instance

  if (!isFunction) {
    return false
  }

  try {
    instance = new fn()
  } catch (err) {
    if (err.message.indexOf('is not a constructor')) {
      return false
    }
  }

  return (
    (instance.constructor === fn && instance instanceof fn) ||
    (instance.constructor === Object && instance instanceof Object)
  )
}

export default isConstructor
