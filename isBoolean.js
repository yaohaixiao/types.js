import _type from './utils/_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 Boolean 类型
 * ========================================================================
 * @method isBoolean
 * @since 0.2.0
 * @category Primitive Values
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 Boolean 类型，则返回 true，否则返回 false
 */
const isBoolean = (val) => {
  return _type(val) === TYPES.BOOLEAN
}

export default isBoolean
