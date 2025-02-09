import _type from './utils/_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 Uint16Array 的数组
 * ========================================================================
 * @method isUint16Array
 * @since 0.2.0
 * @category Typed Arrays
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 Uint16Array 类型，返回 true，否则返回 false
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
 * isUint16Array(numbers) // -> false
 * isUint16Array(new Array(32)) // -> false
 * isUint16Array(args) // -> false
 * isUint16Array(new Uint16Array()) // -> true
 */
const isUint16Array = (val) => {
  return _type(val) === TYPES.UNIT16_ARRAY
}

export default isUint16Array
