import _type from './utils/_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 Number 类型
 * ========================================================================
 * @method isNumber
 * @since 0.2.0
 * @category Primitive Values
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 Number 类型，返回 true，否则返回 false
 * @example
 *
 * // True
 * isNumber(0) // -> true
 * isNumber(.4) // -> true
 * isNumber(3.4E2) // -> true
 * isNumber(0xffffff) // -> true
 * isNumber(NaN) // -> true
 * isNumber(Infinity) // -> true
 * isNumber(-Infinity) // -> true
 *
 * // False
 * isNumber('2') // -> false
 * isNumber(2 + '1') // -> false
 * isNumber(new Number()) // -> false
 */
const isNumber = (val) => {
  return _type(val) === TYPES.NUMBER
}

export default isNumber
