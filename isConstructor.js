import isFunction from './isFunction'
import isNativeFunction from './isNativeFunction'

/**
 * 检测测试函数是否为构造函数
 * ========================================================================
 * @method isConstructor
 * @since 0.2.0
 * @category Function
 * @param {*} fn - 要测试的（构造）函数
 * @returns {Boolean} - fn 是构造函数，返回 true，否则返回 false;
 * @example
 *
 * const fn = function(){};
 * const ff = class {};
 * const callback = () => {}
 *
 * isConstructor(fn) // -> true
 * isConstructor(ff) // -> true
 * isConstructor(callback) // -> false
 * isConstructor(console.log) // -> false
 *
 * isConstructor(Math) // -> false
 * isConstructor(Boolean) // -> true
 * isConstructor(Array) // -> true
 * isConstructor(Function) // -> true
 * isConstructor(Date) // -> true
 * isConstructor(RegExp) // -> true
 * isConstructor(Object) // -> true
 * isConstructor(Promise) // -> true
 */
const isConstructor = (fn) => {
  let proto = null
  let constructor = null
  let instance

  if (!isFunction(fn)) {
    return false
  }

  proto = fn.prototype

  if (!proto) {
    return false
  }

  constructor = fn.constructor

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
