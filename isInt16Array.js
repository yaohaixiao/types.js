import _type from './utils/_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 Int16Array 的数组
 * ========================================================================
 * methods isInt16Array
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 Int32Array 类型，返回 true，否则返回 false
 */
const isInt16Array = (val) => {
  return _type(val) === TYPES.INT16_ARRAY
}

export default isInt16Array
