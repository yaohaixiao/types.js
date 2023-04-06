import _type from './_type'
import { TYPES } from './enum'

/**
 * 检测测试数据是否为 WeakSet 类型
 * ========================================================================
 * @method isWeakSet
 * @param {*} val - 要检测的数据
 * @returns {boolean} 'val' 是 WeakSet 类型返回 true，否则返回 false
 */
const isWeakSet = (val) => {
  return _type(val) === TYPES.WEAK_SET
}

export default isWeakSet
