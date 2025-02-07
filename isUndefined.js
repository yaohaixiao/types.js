import _type from './utils/_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否 undefined（未定义）
 * ========================================================================
 * @method isUndefined
 * @category Lang
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 undefined（未定义），返回 true，否则返回 false
 */
const isUndefined = (val) => {
  return _type(val) === TYPES.UNDEFINED
}

export default isUndefined
