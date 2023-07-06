import isFunction from './isFunction'
import isNativeFunction from './isNativeFunction'

/**
 * 检测测试函数是否为构造函数
 * ========================================================================
 * @method isConstructor
 * @param {Function|Object} fn - 要测试的（构造）函数
 * @returns {Boolean} - fn 是构造函数返回 true，否则返回 false;
 */
const isConstructor = (fn) => {
  const proto = fn.prototype
  let instance

  if (!isFunction(fn)) {
    return false
  }

  try {
    if (isNativeFunction(fn) && proto?.then) {
      instance = new fn((resolve, reject) => {})
    } else {
      instance = new fn()
    }
  } catch (err) {
    /* istanbul ignore else */
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
