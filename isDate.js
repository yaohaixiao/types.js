import _type from './_type'
import { TYPES } from './enum'

/**
 * 检测测试数据的数据类型是否为 Date 类型
 * ========================================================================
 * @method isDate
 * @param {*} val - 要检测的数据
 * @returns {boolean} 'val' 为 Date 类型返回 true，否则返回 false
 */
const isDate = (val) => {
  return _type(val) === TYPES.DATE && val.toString() !== 'Invalid Date' && !isNaN(val)
}

export default isDate
