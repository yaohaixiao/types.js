import _type from './_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 Int8Array 的数组
 * ========================================================================
 * methods isInt8Array
 * @param {*} val
 * @returns {Boolean}
 */
const isInt8Array = (val) => {
  return _type(val) === TYPES.INT8_ARRAY
}

export default isInt8Array
