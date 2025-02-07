import _type from './utils/_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 Function 类型
 * ========================================================================
 * @method isFunction
 * @category Lang
 * @param {*} val - （必须）待检测的数据
 * @returns {Boolean} 'val' 是 Function 类型，返回 true，否则返回 false
 */
const isFunction = (val) => {
  const type = _type(val)
  return type === TYPES.FUNCTION
}

export default isFunction
