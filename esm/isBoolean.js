import _type from './_type'
import { TYPES } from './enum'

/**
 * 检测测试数据是否为 Boolean 类型
 * ========================================================================
 * @method isBoolean
 * @param {*} val - 要检测的数据
 * @returns {boolean} 'val' 是 Boolean 类型则返回 true，否则返回 false
 */
const isBoolean = (val) => {
  return _type(val) === TYPES.BOOLEAN
}

export default isBoolean
