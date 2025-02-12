import isArguments from './isArguments'

/**
 * 检测测试 arguments 对象长度为 0
 * ========================================================================
 * @method isEmptyArguments
 * @since 2.6.0
 * @category Object
 * @param {*} val
 * @returns {Boolean}
 * @example
 *
 * let args
 * const fn = function () {arg = arguments}
 *
 * fn()
 *
 * isEmptyArguments(args) // -> true
 *
 * fn(1)
 *
 * isEmptyArguments(args) // -> false
 */
const isEmptyArguments = (val) => {
  return isArguments(val) && val.length === 0
}

export default isEmptyArguments
