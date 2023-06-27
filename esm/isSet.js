import _type from './_type'
import { TYPES } from './enum'

/**
 * 检测测试数据是否为 Set 类型
 * ========================================================================
 * @method isSet
 * @param {*} val - 要检测的数据
 * @returns {boolean} 'val' 是 Set 类型返回 true，否则返回 false
 */
const isSet = (val) => {
  return _type(val) === TYPES.SET
}

export default isSet
