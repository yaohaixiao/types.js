import _type from './_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 Array 类型
 * ========================================================================
 * @method isArray
 * @param {*} val - 要检测的数据
 * @returns {Boolean} - 'val' 是 Array 则返回 true，否则返回 false
 */
const isArray = (val) => {
  return Array.isArray ? Array.isArray(val) : _type(val) === TYPES.ARRAY
}

export default isArray
