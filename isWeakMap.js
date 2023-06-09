import _type from './_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 WeakMap 类型
 * ========================================================================
 * @method isWeakMap
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 WeakMap 类型，返回 true，否则返回 false
 */
const isWeakMap = (val) => {
  return _type(val) === TYPES.WEAK_MAP
}

export default isWeakMap
