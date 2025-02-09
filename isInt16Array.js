import _type from './utils/_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 Int16Array 的数组
 * ========================================================================
 * @method isInt16Array
 * @since 0.2.0
 * @category Typed Arrays
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 Int32Array 类型，返回 true，否则返回 false
 * @example
 *
 * const numbers = [ 2, 4 ]
 * let args
 *
 * function test(a){
 *   args = arguments
 *   return a === 'test'
 * }
 *
 * test()
 *
 * isInt16Array(numbers) // -> false
 * isInt16Array(new Array(16)) // -> false
 * isInt16Array(args) // -> false
 * isInt16Array(new Int16Array()) => true
 */
const isInt16Array = (val) => {
  return _type(val) === TYPES.INT16_ARRAY
}

export default isInt16Array
