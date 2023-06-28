import isFunction from './isFunction'

/**
 * 检测测试数据是否为 JavaScript 内置函数
 * ========================================================================
 * @method isNativeFunction
 * @param {Function} fn - 要测试的函数
 * @returns {boolean} - fn 是内置函数返回 true，否则返回 false;
 */
const isNativeFunction = (fn) => {
  return isFunction(fn) && /\{\s*\[native code\]\s*\}/.test('' + fn)
}

export default isNativeFunction
