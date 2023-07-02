import _type from './_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 Int16Array 的数组
 * ========================================================================
 * methods isInt16Array
 * @param {*} val
 * @returns {Boolean}
 */
const isInt16Array = (val) => {
  return _type(val) === TYPES.INT16_ARRAY
}

export default isInt16Array
