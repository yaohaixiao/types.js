import isFunction from './isFunction'

/**
 * 检测测试数据是否为 JavaScript 内置函数
 * ========================================================================
 * @method isNativeFunction
 * @since 0.2.0
 * @category Function
 * @param {*} val - 要测试的函数
 * @returns {Boolean} - val 是内置函数，返回 true，否则返回 false;
 */
const isNativeFunction = (val) => {
  return isFunction(val) && /\{\s*\[native code\]\s*\}/.test('' + val)
}

export default isNativeFunction
