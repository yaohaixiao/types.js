import isFunction from './isFunction'
import isNativeFunction from './isNativeFunction'

/**
 * 检测测试函数是否为构造函数
 * ========================================================================
 * @method isConstructor
 * @category Lang
 * @param {Function|Object} fn - 要测试的（构造）函数
 * @returns {Boolean} - fn 是构造函数，返回 true，否则返回 false;
 */
const isConstructor = (fn) => {
  const proto = fn.prototype
  const constructor = fn.constructor
  let instance

  if (!isFunction(fn) || !proto) {
    return false
  }

  if (
    isNativeFunction(fn) &&
    (constructor === Function || constructor === fn)
  ) {
    return true
  }

  // 判断 fn 是否为 Promise 构造函数
  instance = new fn()

  // 判断 constructor
  return (
    (instance.constructor === fn && instance instanceof fn) ||
    (instance.constructor === Object && instance instanceof Object)
  )
}

export default isConstructor
