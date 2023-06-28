import _type from './_type'
import { TYPES } from './enum'

/**
 * 检测测试数据是否为 null
 * ========================================================================
 * @method isNull
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 为 null 返回 true，否则返回 false
 */
const isNull = (val) => {
  return _type(val) === TYPES.NULL
}

export default isNull
