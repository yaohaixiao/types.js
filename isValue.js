import _type from './utils/_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为有效的数据
 * =============================================================
 * @method isValue
 * @since 0.2.0
 * @category Base
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是有效的数据，返回 true，否则返回 false
 * @example
 *
 * const fn = () => {}
 * let projects
 * function empty(){}
 *
 * // 非有效数据
 * isValue(projects) // -> false
 * isValue(NaN) // -> false
 * isValue(null) // -> false
 * isValue(Infinity) // -> false
 * isValue(-Infinity) // -> false
 *
 * // 有效数据
 * isValue(0) // -> true
 * isValue('') // -> true
 * isValue(false) // -> true
 * isValue([]) // -> true
 * isValue({}) // -> true
 * isValue(/\s+/ig) // -> true
 * isValue(new Date()) // -> true
 * isValue(empty) // -> true
 * isValue(fn) // -> true
 */
const isValue = (val) => {
  const type = _type(val)

  switch (type) {
    case TYPES.NUMBER:
      return isFinite(val)
    case TYPES.NULL:
    case TYPES.UNDEFINED:
      return false
    default:
      return !!type
  }
}

export default isValue
