import _type from './utils/_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 Uint8Array 的数组
 * ========================================================================
 * @method isUint8Array
 * @since 0.2.0
 * @category Typed Arrays
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 Uint8Array 类型，返回 true，否则返回 false
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
 * isUint8Array(numbers) // -> false
 * isUint8Array(new Array(32)) // -> false
 * isUint8Array(args) // -> false
 * isUint8Array(new Uint8Array()) // -> true
 */
const isUint8Array = (val) => {
  return _type(val) === TYPES.UNIT8_ARRAY
}

export default isUint8Array
