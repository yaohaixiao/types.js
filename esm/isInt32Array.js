import _type from './_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 Int32Array 的数组
 * ========================================================================
 * methods isInt32Array
 * @param {*} val
 * @returns {Boolean}
 */
const isInt32Array = (val) => {
  return _type(val) === TYPES.INT32_ARRAY
}

export default isInt32Array
