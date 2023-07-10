import _type from './_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为有效的数据
 * =============================================================
 * @method isValue
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是有效的数据返回 true，否则返回 false
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
