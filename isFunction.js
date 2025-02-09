import _type from './utils/_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 Function 类型
 * ========================================================================
 * @method isFunction
 * @since 0.2.0
 * @category Function
 * @param {*} val - （必须）待检测的数据
 * @returns {Boolean} 'val' 是 Function 类型，返回 true，否则返回 false
 * @example
 *
 * const blank = () => {}
 * const fn = new Function()
 *
 * function empty(){}
 *
 * isFunction(empty) // -> true
 * isFunction(blank) // -> true
 * isFunction(fn) // -> true
 * isFunction(parseInt) // -> true
 * isFunction(Array) // -> true
 * isFunction(Boolean) // -> true
 * isFunction(Date) // -> true
 * isFunction(Number) // -> true
 * isFunction(Object) // -> true
 * isFunction(RegExp) // -> true
 * isFunction(String) // -> true
 *
 * isFunction(Math) // -> false
 * isFunction(console) // -> false
 */
const isFunction = (val) => {
  return _type(val) === TYPES.FUNCTION
}

export default isFunction
