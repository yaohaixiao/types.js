import _type from './utils/_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为正则表达式
 * ========================================================================
 * @method isRegExp
 * @since 0.2.0
 * @category Object
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是正则表达式，返回 true，否则返回 false
 * @example
 *
 * const patternOne = new RegExp('\\s+','ig')
 * const patternTwo = /\s+/ig
 * const patternStr = '/\\s+/ig'
 *
 * Types.isRegExp(patternOne) // -> true
 *
 * Types.isRegExp(patternTwo) // -> true
 *
 * Types.isRegExp(patternStr) // -> false
 */
const isRegExp = (val) => {
  return _type(val) === TYPES.REGEXP
}

export default isRegExp
