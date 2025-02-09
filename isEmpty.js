import isString from './isString'
import isNull from './isNull'
import isBuffer from './isBuffer'
import isHTMLCollection from './isHTMLCollection'
import isTypedArray from './isTypedArray'
import isEmptyArray from './isEmptyArray'
import isEmptyObject from './isEmptyObject'
import isEmptyArguments from './isEmptyArguments'

/**
 * 检测测试数据是否为空字符串、数组、对象或者空的 arguments 参数
 * ========================================================================
 * @method isEmpty
 * @since 0.2.0
 * @category String
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是空字符串，返回 true，否则返回 false
 * @example
 *
 * isEmpty(null);
 *
 * // 字符串
 * isEmpty('') // -> true
 * isEmpty(String()) // -> true
 * isEmpty(' ') // -> false
 *
 * // 数组
 * isEmpty([]) // -> true
 * isEmpty([1]) // -> false
 *
 * // 对象
 * isEmpty(new String()) // -> true
 * isEmpty({}) // -> true
 * isEmpty({a: 1}) // -> false
 *
 * // Prototype 对象
 * let args
 * const fn = function () {arg = arguments}
 *
 * fn()
 *
 * isEmpty(fn.prototype) // -> false
 *
 * // arguments 参数
 * isEmpty(args) // -> true
 *
 * fn(1)
 *
 * isEmpty(args) // -> false
 *
 * // buffer
 * left buffer = Buffer.alloc(0)
 *
 * isEmpty(buffer) => true
 *
 * buffer = Buffer.alloc(10)
 *
 * isEmpty(buffer) => false
 */
const isEmpty = (val) => {
  return (
    isNull(val) ||
    (isString(val) && val === '') ||
    ((isHTMLCollection(val) || isBuffer(val) || isTypedArray(val)) &&
      !val.length) ||
    isEmptyArguments(val) ||
    isEmptyObject(val) ||
    isEmptyArray(val)
  )
}

export default isEmpty
