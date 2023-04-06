import _type from './_type'
import { TYPES } from './enum'

/**
 * 检测测试数据是否 undefined（未定义）
 * ========================================================================
 * @method isUndefined
 * @param {*} val - 要检测的数据
 * @returns {boolean} 'val' 是 undefined（未定义）返回 true，否则返回 false
 */
const isUndefined = (val) => {
  return _type(val) === TYPES.UNDEFINED
}

export default isUndefined
