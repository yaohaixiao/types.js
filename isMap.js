import _type from './_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 Map 类型
 * ========================================================================
 * @method isMap
 * @category Lang
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 Map 类型，返回 true，否则返回 false
 */
const isMap = (val) => {
  return _type(val) === TYPES.MAP
}

export default isMap
