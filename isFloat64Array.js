import _type from './utils/_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 Float64Array 的数组
 * ========================================================================
 * @method isFloat64Array
 * @since 0.2.0
 * @category Typed Arrays
 * @param {*} val - （必须）待检测的数据
 * @returns {Boolean} 'val' 是 Float64Array 类型，返回 true，否则返回 false
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
 * isFloat64Array(numbers) // -> false
 * isFloat64Array(new Array(32)) // -> false
 * isFloat64Array(args) // -> false
 * isFloat64Array(new Float64Array()) => true
 */
const isFloat64Array = (val) => {
  return _type(val) === TYPES.FLOAT64_ARRAY
}

export default isFloat64Array
