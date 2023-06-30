import _type from './_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 Uint8Array 的数组
 * ========================================================================
 * methods isUint8Array
 * @param {*} val
 * @returns {Boolean}
 */
const isUint8Array = (val) => {
  return _type(val) === TYPES.UNIT8_ARRAY
}

export default isUint8Array
