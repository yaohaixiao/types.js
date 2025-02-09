import _type from './utils/_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 Uint8ClampedArray 的数组
 * ========================================================================
 * @method isUint8ClampedArray
 * @since 0.2.0
 * @category Typed Arrays
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 Uint8ClampedArray 类型，返回 true，否则返回 false
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
 * isUint8ClampedArray(numbers) // -> false
 * isUint8ClampedArray(new Array(32)) // -> false
 * isUint8ClampedArray(args) // -> false
 * isUint8ClampedArray(new Uint8ClampedArray()) // -> true
 */
const isUint8ClampedArray = (val) => {
  return _type(val) === TYPES.UNIT8_CLAMPED_ARRAY
}

export default isUint8ClampedArray
